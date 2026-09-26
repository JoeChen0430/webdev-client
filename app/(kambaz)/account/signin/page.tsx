import Link from "next/link";
import "@/app/labs/lab2/tailwind/utilities.css";

const FIELD =
  "mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>
      <input
        placeholder="username"
        className={`wd-username ${FIELD}`}
        defaultValue="ada"
      />
      <input
        placeholder="password"
        type="password"
        className={`wd-password ${FIELD}`}
        defaultValue="123"
      />
      {/* With AI: sample note field, same full-width utilities */}
      <input
        id="wd-ai-signin-note"
        placeholder="sample note"
        className={FIELD}
      />
      <Link
        href="/dashboard"
        id="wd-signin-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign in
      </Link>
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
