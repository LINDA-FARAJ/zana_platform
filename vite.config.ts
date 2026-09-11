import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";
import fs from "node:fs";
import path from "node:path";

function localLovableAssets(): Plugin {
  const assetsDir = path.resolve(process.cwd(), "src/assets");

  const serveAsset = (req: any, res: any, next: () => void) => {
    const pathname = (req.url ?? "").split("?")[0];

    // بعد /__l5e/assets-v1/ نتوقع:
    // /asset-id/filename.jpg
    const match = pathname.match(/^\/[^/]+\/([^/]+)$/);

    if (!match) {
      return next();
    }

    const filename = decodeURIComponent(match[1]);

    // منع الوصول لأي ملف خارج src/assets
    const safeFilename = path.basename(filename);
    const filePath = path.resolve(assetsDir, safeFilename);

    if (!filePath.startsWith(assetsDir + path.sep)) {
      return next();
    }

    if (!fs.existsSync(filePath)) {
      return next();
    }

    const ext = path.extname(filePath).toLowerCase();

    const contentTypes: Record<string, string> = {
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".webp": "image/webp",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
    };

    res.statusCode = 200;
    res.setHeader(
      "Content-Type",
      contentTypes[ext] ?? "application/octet-stream"
    );

    res.setHeader(
      "Cache-Control",
      "public, max-age=31536000, immutable"
    );

    fs.createReadStream(filePath).pipe(res);
  };

  return {
    name: "local-lovable-assets",

    configureServer(server) {
      server.middlewares.use(
        "/__l5e/assets-v1",
        serveAsset
      );
    },

    configurePreviewServer(server) {
      server.middlewares.use(
        "/__l5e/assets-v1",
        serveAsset
      );
    },
  };
}

export default defineConfig({
  vite: {
    plugins: [localLovableAssets()],
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});