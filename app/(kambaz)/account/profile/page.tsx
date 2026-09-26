"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import { useAccountContext, type User } from "../AccountContext";

const FIELD =
  "mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm";

export default function Profile() {
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();
  // The book's §4.10.5.5 copies the current user into local state inside a
  // useEffect. React 19's set-state-in-effect rule blocks that, so this uses a
  // lazy initial value to achieve the same thing: the draft starts as the
  // signed-in user, and editing a field still never writes back to the context.
  // One render instead of two, and no lint suppression.
  const [profile, setProfile] = useState<User | null>(currentUser);

  // The effect now only handles the side effect that genuinely is one:
  // redirecting when nobody is signed in.
  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
    }
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
