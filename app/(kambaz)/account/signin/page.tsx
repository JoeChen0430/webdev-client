"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import * as db from "../../database";
import { useAccountContext } from "../AccountContext";

const FIELD =
  "mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signin = () => {
    const user = db.users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password,
    );
    if (!user) {
      setError("Invalid username or password");
      return;
    }
    setError("");
    setCurrentUser(user);
    router.push("/dashboard");
  };

  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>
      <input
        placeholder="username"
        id="wd-username"
        className={`wd-username ${FIELD}`}
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        placeholder="password"
        type="password"
        id="wd-password"
        className={`wd-password ${FIELD}`}
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      {/* With AI (ch2): sample note field, same full-width utilities */}
      <input
        id="wd-ai-signin-note"
        placeholder="sample note"
        className={FIELD}
      />
      {error && (
        <p id="wd-signin-error" className="mb-2 text-sm text-red-600">
          {error}
        </p>
      )}
      <button
        type="button"
        onClick={signin}
        id="wd-signin-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign in
      </button>
      <Link
        href="/account/signup"
        id="wd-signup-link"
        className="text-blue-600 hover:underline"
      >
        Sign up
      </Link>
    </div>
  );
}
