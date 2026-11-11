"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import "@/app/labs/lab2/tailwind/utilities.css";
import { useAccountContext } from "../AccountContext";
import * as client from "../client";

const FIELD =
  "mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm";

export default function Signup() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [verify, setVerify] = useState("");
  const [error, setError] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  // 5.4.2.2 — Express answers 400 when the username is taken, so the screen
  // has something real to report instead of a hard-coded sample user.
  const signup = async () => {
    if (!user.username || !user.password) {
      setError("Username and password are required");
      return;
    }
    if (user.password !== verify) {
      setError("Passwords do not match");
      return;
    }
    try {
      const current = await client.signup(user);
      setError("");
      setCurrentUser(current);
      router.push("/account/profile");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 400) {
        setError(err.response.data?.message ?? "Username already in use");
        return;
      }
      setError("Unable to reach the server. Is it running on port 4000?");
    }
  };

  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      <input
        placeholder="username"
        id="wd-username"
        className={`wd-username ${FIELD}`}
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        placeholder="password"
        type="password"
        id="wd-password"
        className={`wd-password ${FIELD}`}
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <input
        placeholder="verify password"
        type="password"
        id="wd-password-verify"
        className={`wd-password-verify ${FIELD}`}
        value={verify}
        onChange={(e) => setVerify(e.target.value)}
      />
      {error && (
        <p id="wd-signup-error" className="mb-2 text-sm text-red-600">
          {error}
        </p>
      )}
      <button
        type="button"
        onClick={signup}
        id="wd-signup-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign up
      </button>
      <Link href="/account/signin" className="text-blue-600 hover:underline">
        Sign in
      </Link>
    </div>
  );
}
