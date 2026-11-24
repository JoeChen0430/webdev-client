"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import * as client from "./client";
import type { User } from "./client";

const CONTROL = "rounded border border-neutral-300 px-2 py-1 text-sm";

// 6.2.6 — the same /api/users endpoints the Kambaz Users screen calls, in a
// three-column table so the CRUD sequence is visible in one place. The route
// is ADMIN-only, so this demo says so rather than showing a silent empty table
// when nobody is signed in.
export default function Lab6Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draftName, setDraftName] = useState("");
  const [message, setMessage] = useState("");

  const report = (error: unknown, fallback: string) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      setMessage(
        "GET /api/users answered 401. Sign in as an ADMIN first — the sample data has nick_fury / fury123.",
      );
      return;
    }
    if (axios.isAxiosError(error)) {
      setMessage(error.response?.data?.message ?? fallback);
      return;
    }
    setMessage(fallback);
  };

  useEffect(() => {
    const load = async () => {
      try {
        const data = await client.findAllUsers();
        setUsers(data);
      } catch (error) {
        report(error, "Unable to read users. Is Express running?");
      }
    };
    void load();
  }, []);

  const reload = async () => {
    try {
      setUsers(await client.findAllUsers());
      setMessage("");
    } catch (error) {
      report(error, "Unable to read users.");
    }
  };

  const filterByRole = async (nextRole: string) => {
    setRole(nextRole);
    setName("");
    try {
      setUsers(
        nextRole
          ? await client.findUsersByRole(nextRole)
          : await client.findAllUsers(),
      );
      setMessage("");
    } catch (error) {
      report(error, "Unable to filter by role.");
    }
  };

  const filterByName = async (nextName: string) => {
    setName(nextName);
    setRole("");
    try {
      setUsers(
        nextName
          ? await client.findUsersByPartialName(nextName)
          : await client.findAllUsers(),
      );
      setMessage("");
    } catch (error) {
      report(error, "Unable to filter by name.");
    }
  };

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
      setMessage(`Created ${user.username}.`);
    } catch (error) {
      report(error, "Unable to create the user.");
    }
  };

  const saveName = async (user: User) => {
    const trimmed = draftName.trim();
    const cut = trimmed.indexOf(" ");
    const firstName = cut === -1 ? trimmed : trimmed.slice(0, cut);
    const lastName = cut === -1 ? "" : trimmed.slice(cut + 1).trim();
    const updated = { ...user, firstName, lastName };
    try {
      await client.updateUser(updated);
      setUsers(users.map((u) => (u._id === user._id ? updated : u)));
      setEditingId(null);
      setMessage(`Updated ${updated.username}.`);
    } catch (error) {
      report(error, "Unable to update the user.");
    }
  };

  const removeUser = async (user: User) => {
    try {
      await client.deleteUser(user._id);
      setUsers(users.filter((u) => u._id !== user._id));
      setMessage(`Deleted ${user.username}.`);
    } catch (error) {
      report(error, "Unable to delete the user.");
    }
  };

  return (
    <div id="wd-lab6-users" className="mb-6">
      <h3 className="text-xl font-semibold">Users</h3>
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
          onChange={(e) => filterByName(e.target.value)}
        />
        <select
          className={`wd-select-role ${CONTROL}`}
          value={role}
          onChange={(e) => filterByRole(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="STUDENT">Students</option>
          <option value="TA">Assistants</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrators</option>
        </select>
        <button
          type="button"
          id="wd-lab6-reload-users"
          onClick={reload}
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        >
          Reload
        </button>
      </div>

      {message && (
        <p id="wd-lab6-users-message" className="mb-2 text-sm text-neutral-600">
          {message}
        </p>
      )}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-neutral-300">
              <th className="p-2">Name</th>
              <th className="p-2">Role</th>
              <th className="p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="odd:bg-neutral-50">
                <td className="p-2 text-nowrap">
                  {editingId === user._id ? (
                    <input
                      className={CONTROL}
                      value={draftName}
                      autoFocus
                      onChange={(e) => setDraftName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") void saveName(user);
                        if (e.key === "Escape") setEditingId(null);
                      }}
                    />
                  ) : (
                    <span
                      className="cursor-pointer"
                      title="Click to rename, Enter to save"
                      onClick={() => {
                        setDraftName(
                          `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
                        );
                        setEditingId(user._id);
                      }}
                    >
                      {user.firstName} {user.lastName}
                    </span>
                  )}
                  <FaTrash
                    onClick={() => removeUser(user)}
                    title="Delete user"
                    className="ms-2 inline cursor-pointer align-middle text-red-600"
                  />
                </td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="my-3" />
    </div>
  );
}
