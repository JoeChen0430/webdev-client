"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import "../kambaz.css";

const IDLE = "list-group-item border-0 text-red-600";
const ACTIVE = "list-group-item active border-0";

const LINKS = [
  { label: "Signin", path: "/account/signin" },
  { label: "Signup", path: "/account/signup" },
  { label: "Profile", path: "/account/profile" },
];

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";

  return (
    <div
      id="wd-account-navigation"
      className="wd list-group rounded-none text-lg"
    >
      {LINKS.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={pathname === link.path ? ACTIVE : IDLE}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
