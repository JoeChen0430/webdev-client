"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";
import * as client from "../client";

const FIELD =
  "mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm";

// The parent renders this keyed by user id, so switching users remounts it and
// re-runs the initial state. That replaces the "copy context into state inside
// a useEffect" pattern from §4.10.5.5 that React 19 now flags.
export default function ProfileForm({ user }: { user: User }) {
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const [profile, setProfile] = useState<User>(user);
  const [status, setStatus] = useState("");

  // 5.4.2.3 — save the draft, then refresh Context with the server's version so
  // the rest of Kambaz sees exactly what was stored.
  const updateProfile = async () => {
    try {
      setCurrentUser(await client.updateUser(profile));
      setStatus("Saved");
    } catch {
      setStatus("Unable to save. Is the server running on port 4000?");
    }
  };

  // 5.4.2.5 — clear the session on the server as well as in Context.
  const signout = async () => {
    try {
      await client.signout();
    } finally {
      setCurrentUser(null);
      router.push("/account/signin");
    }
  };

  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      <input
        id="wd-username"
        className={`wd-username ${FIELD}`}
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      <input
        id="wd-password"
        type="password"
        className={`wd-password ${FIELD}`}
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
      />
      <input
        id="wd-firstname"
        className={FIELD}
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />
      <input
        id="wd-lastname"
        className={FIELD}
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />
      <input
        id="wd-email"
        type="email"
        className={FIELD}
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <input
        id="wd-loginid"
        className={FIELD}
        value={profile.loginId}
        onChange={(e) => setProfile({ ...profile, loginId: e.target.value })}
      />
      <input
        id="wd-section"
        className={FIELD}
        value={profile.section}
        onChange={(e) => setProfile({ ...profile, section: e.target.value })}
      />
      <select
        id="wd-role"
        className={FIELD}
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
        <option value="TA">TA</option>
      </select>
      {status && (
        <p id="wd-profile-status" className="mb-2 text-sm text-neutral-600">
          {status}
        </p>
      )}
      <button
        type="button"
        onClick={updateProfile}
        id="wd-update-profile-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Update
      </button>
      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="block w-full rounded bg-red-600 px-3 py-2 text-center text-white"
      >
        Sign out
      </button>
    </div>
  );
}
