"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import { useAccountContext, type User } from "../AccountContext";

const FIELD =
  "mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  // Section 4.10.5.5 asks for exactly this shape: redirect when nobody is
  // signed in, otherwise copy the current user into a local draft so editing a
  // field does not rewrite the context on every keystroke. React 19's
  // set-state-in-effect rule flags the copy; the cascading render is a single
  // extra pass on mount, and Chapter 5 replaces this with a real fetch.
  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProfile(currentUser);
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;
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
      {/* On your own: the login id and section also come from the signed-in user */}
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
