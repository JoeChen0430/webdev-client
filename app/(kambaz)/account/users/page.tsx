"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import PeopleTable from "../../courses/[cid]/people/Table";
import * as client from "../client";
import type { User } from "../client";
import { useAccountContext } from "../AccountContext";

const CONTROL = "rounded border border-neutral-300 px-2 py-1 text-sm";

// 6.2.6 — the ADMIN screen over the whole users collection: find all, filter
// by predicate, open one document, update it, delete it, create a new one.
export default function Users() {
  const { currentUser, sessionPending } = useAccountContext();
  const [users, setUsers] = useState<User[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [failed, setFailed] = useState(false);

  const isAdmin = currentUser?.role === "ADMIN";

  const fetchUsers = async () => {
    try {
      setUsers(await client.findAllUsers());
      setFailed(false);
    } catch {
      setFailed(true);
    }
  };

  useEffect(() => {
    if (!isAdmin) return;
    const load = async () => {
      try {
        setUsers(await client.findAllUsers());
      } catch {
        setFailed(true);
      }
    };
    void load();
  }, [isAdmin]);

  // The book only hides the sidebar link for non-admins, which leaves the
  // screen reachable by typing the URL. Express is the real gate — it answers
  // 401 without a session — but bouncing here keeps the UI honest about who
  // this page is for. Every hook above runs first, so the hook order is stable.
  if (sessionPending) {
    return <p className="text-sm text-neutral-600">Loading account…</p>;
  }
  if (!currentUser) redirect("/account/signin");
  if (!isAdmin) redirect("/account/profile");

  // 6.2.6.3 — the two filters are independent, as the chapter specifies. The
  // other control is cleared when one is used so the screen never shows a role
  // and a search term while only one of them is actually applied.
  const filterUsersByRole = async (nextRole: string) => {
    setRole(nextRole);
    setName("");
    try {
      setUsers(
        nextRole
          ? await client.findUsersByRole(nextRole)
          : await client.findAllUsers(),
      );
      setFailed(false);
    } catch {
      setFailed(true);
    }
  };

  const filterUsersByName = async (nextName: string) => {
    setName(nextName);
    setRole("");
    try {
      setUsers(
        nextName
          ? await client.findUsersByPartialName(nextName)
          : await client.findAllUsers(),
      );
      setFailed(false);
    } catch {
      setFailed(true);
    }
  };

  // 6.2.6.7 — Date.now() in the username keeps two quick clicks from colliding
  // with the schema's `unique: true` index on username.
  const createUser = async () => {
    try {
      const user = await client.createUser({
        firstName: "New",
        lastName: `User ${users.length + 1}`,
        username: `newuser${Date.now()}`,
        password: "password123",
        email: `email${users.length + 1}@neu.edu`,
        section: "S101",
        role: "STUDENT",
      });
      setUsers([...users, user]);
      setFailed(false);
    } catch {
      setFailed(true);
    }
  };

  return (
    <div id="wd-users">
      <h3 className="mb-3 text-xl font-semibold">Users</h3>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        <button
          type="button"
          id="wd-add-people"
          onClick={createUser}
          className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
        >
          + Users
        </button>
        <input
          className={`wd-filter-by-name ${CONTROL}`}
          placeholder="Search people"
          value={name}
          onChange={(e) => filterUsersByName(e.target.value)}
        />
        <select
          className={`wd-select-role ${CONTROL}`}
          value={role}
          onChange={(e) => filterUsersByRole(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="STUDENT">Students</option>
          <option value="TA">Assistants</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrators</option>
        </select>
      </div>

      {failed && (
        <p className="mb-2 rounded bg-red-100 px-3 py-2 text-sm text-red-800">
          Unable to reach the server. Check that Express is running and that
          MongoDB is connected.
        </p>
      )}

      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}
