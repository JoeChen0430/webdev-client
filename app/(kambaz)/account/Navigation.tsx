"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import "../kambaz.css";
import { useAccountContext, type User } from "./AccountContext";

const IDLE = "list-group-item border-0 text-red-600";
const ACTIVE = "list-group-item active border-0";

const LABELS: Record<string, string> = {
  signin: "Signin",
  signup: "Signup",
  profile: "Profile",
  users: "Users",
};

// 6.2.6.2 — the Users screen is ADMIN-only, so the link only exists for an
// ADMIN session. The active/idle classes stay the ones the rest of this
// sidebar already uses rather than the book's one-off black/red pair, so all
// the Account links keep looking like one control.
// Keyed off the user, not off the role string: a signed-in user whose role is
// somehow blank still belongs on Profile, not back at Signin.
const linksFor = (user: User | null) => {
  if (!user) return ["signin", "signup"];
  return user.role === "ADMIN" ? ["profile", "users"] : ["profile"];
};

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = linksFor(currentUser);
  const pathname = usePathname() ?? "";
  return (
    <div
      id="wd-account-navigation"
      className="wd list-group rounded-none text-lg"
    >
      {links.map((link) => {
        const href = `/account/${link}`;
        return (
          <Link
            key={link}
            href={href}
            className={pathname === href ? ACTIVE : IDLE}
          >
            {LABELS[link]}
          </Link>
        );
      })}
    </div>
  );
}
