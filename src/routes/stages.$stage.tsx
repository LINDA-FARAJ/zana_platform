import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/stages/$stage")({
  component: () => <Outlet />,
});
