"use client";
import { logout } from "../login/actions";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={async () => await logout()}>Logout</button>
    </div>
  );
}
