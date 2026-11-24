"use client";

import { useEffect, useState } from "react";
import { FaCheck, FaPencilAlt, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import * as client from "../../../account/client";
import { ROLES, type User } from "../../../account/client";

// 6.2.6.4 - 6.2.6.6 — one user document, loaded by primary key, shown in a
// panel pinned to the right edge. The parent renders this keyed by uid, so
// clicking a different row remounts the panel and the draft state starts over
// instead of leaking the previous user's half-finished edit.
export default function PeopleDetails({
  uid,
  onClose,
}: {
  uid: string | null;
  onClose: () => void;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [failed, setFailed] = useState(false);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!uid) return;
    const load = async () => {
      try {
        setUser(await client.findUserById(uid));
      } catch {
        setFailed(true);
      }
    };
    void load();
  }, [uid]);

  if (!uid) return null;

  const startEditing = () => {
    if (!user) return;
    // The input is seeded here rather than in an effect: `name` only matters
    // once editing starts, and React 19 flags state writes made during render
    // or synchronously inside an effect.
    setName(`${user.firstName ?? ""} ${user.lastName ?? ""}`.trim());
    setEditing(true);
  };

  const saveUser = async () => {
    if (!user) return;
    // The book splits on every space, which loses a three-part name and leaves
    // lastName undefined when the field has no space at all. Split once so
    // "Mary Jane Watson" keeps "Jane Watson" as the last name.
    const trimmed = name.trim();
    const cut = trimmed.indexOf(" ");
    const firstName = cut === -1 ? trimmed : trimmed.slice(0, cut);
    const lastName = cut === -1 ? "" : trimmed.slice(cut + 1).trim();
    const updated = { ...user, firstName, lastName };
    try {
      await client.updateUser(updated);
      setUser(updated);
      setEditing(false);
      onClose();
    } catch {
      setFailed(true);
    }
  };

  const deleteUser = async () => {
    try {
      await client.deleteUser(uid);
    } catch {
      setFailed(true);
      return;
    }
    onClose();
  };

  return (
    <div className="wd-people-details fixed top-0 end-0 bottom-0 z-20 w-full max-w-sm overflow-y-auto bg-white p-4 shadow">
      <button
        type="button"
        onClick={onClose}
        title="Close"
        className="wd-close-details absolute end-2 top-2"
      >
        <IoCloseSharp className="text-3xl" />
      </button>

      <div className="mt-2 text-center">
        <FaUserCircle className="inline text-6xl text-neutral-500" />
      </div>
      <hr className="my-3" />

      {failed && (
        <p className="wd-people-error mb-2 rounded bg-red-100 px-3 py-2 text-sm text-red-800">
          The server did not answer. Is Express running and MongoDB connected?
        </p>
      )}

      {!user ? (
        <p className="text-sm text-neutral-600">Loading…</p>
      ) : (
        <>
          <div className="flex items-center gap-2">
            {!editing ? (
              <>
                <span
                  className="wd-name cursor-pointer text-lg text-red-700"
                  onClick={startEditing}
                >
                  {user.firstName} {user.lastName}
                </span>
                <FaPencilAlt
                  onClick={startEditing}
                  title="Edit name"
                  className="cursor-pointer text-blue-600"
                />
              </>
            ) : (
              <>
                <input
                  className="wd-edit-name w-full rounded border border-neutral-300 px-2 py-1 text-sm"
                  value={name}
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") void saveUser();
                  }}
                />
                <FaCheck
                  onClick={saveUser}
                  title="Save name"
                  className="cursor-pointer text-green-600"
                />
              </>
            )}
          </div>

          <div className="mt-3 text-sm">
            <b>Roles:</b> <span className="wd-roles">{user.role}</span>
            <br />
            <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span>
            <br />
            <b>Section:</b> <span className="wd-section">{user.section}</span>
            <br />
            <b>Total Activity:</b>{" "}
            <span className="wd-total-activity">{user.totalActivity}</span>
          </div>

          {/* §6.2.6.6 "on your own": edit email and role, persisted by the same
              updateUser call the name uses. */}
          <label className="mt-3 block text-sm font-semibold" htmlFor="wd-people-email">
            Email
          </label>
          <input
            id="wd-people-email"
            type="email"
            className="wd-email mb-2 w-full rounded border border-neutral-300 px-2 py-1 text-sm"
            value={user.email ?? ""}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <label className="block text-sm font-semibold" htmlFor="wd-people-role">
            Role
          </label>
          <select
            id="wd-people-role"
            className="wd-role mb-3 w-full rounded border border-neutral-300 px-2 py-1 text-sm"
            value={user.role ?? ""}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          >
            {ROLES.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={saveUser}
            className="wd-save mb-2 w-full rounded bg-blue-600 px-3 py-1 text-sm text-white"
          >
            Save
          </button>

          <button
            type="button"
            onClick={deleteUser}
            className="wd-delete float-end rounded bg-red-600 px-3 py-1 text-sm text-white"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={onClose}
            className="wd-cancel float-end me-2 rounded bg-neutral-200 px-3 py-1 text-sm"
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
}
