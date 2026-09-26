"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import "../kambaz.css";
import { useAccountContext } from "./AccountContext";

const IDLE = "list-group-item border-0 text-red-600";
const ACTIVE = "list-group-item active border-0";

const LABELS: Record<string, string> = {
  signin: "Signin",
  signup: "Signup",
  profile: "Profile",
};

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
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
