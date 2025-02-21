import { Link, Outlet } from "@tanstack/react-router";

export function RootLayout() {
  return (
    <div className="">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Outlet />
    </div>
  );
}
