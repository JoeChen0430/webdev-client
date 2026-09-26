"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
import { LiaBookSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { FaInbox } from "react-icons/fa";
import { LiaCogSolid } from "react-icons/lia";
import "@/app/labs/lab2/tailwind/utilities.css";

const TILE_IDLE =
  "block bg-black py-3 text-center text-sm text-white no-underline";
const TILE_ACTIVE =
  "block bg-white py-3 text-center text-sm text-red-600 no-underline";

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] overflow-y-auto bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-4 text-center text-sm text-red-600 no-underline"
      >
        Northeastern
      </a>
      <Link
        href="/account"
        id="wd-account-link"
        className={isActive("/account") ? TILE_ACTIVE : TILE_IDLE}
      >
        <FaRegCircleUser
          className={
            isActive("/account")
              ? "inline-block text-3xl text-red-600"
              : "inline-block text-3xl text-white"
          }
        />
        <br />
        Account
      </Link>
      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className={isActive("/dashboard") ? TILE_ACTIVE : TILE_IDLE}
      >
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
        <br />
        Dashboard
      </Link>
      <Link
        href="/dashboard"
        id="wd-course-link"
        className={isActive("/courses") ? TILE_ACTIVE : TILE_IDLE}
      >
        <LiaBookSolid className="inline-block text-3xl text-red-600" />
        <br />
        Courses
      </Link>
      <Link
        href="/calendar"
        id="wd-calendar-link"
        className={isActive("/calendar") ? TILE_ACTIVE : TILE_IDLE}
      >
        <IoCalendarOutline className="inline-block text-3xl text-red-600" />
        <br />
        Calendar
      </Link>
      <Link
        href="/inbox"
        id="wd-inbox-link"
        className={isActive("/inbox") ? TILE_ACTIVE : TILE_IDLE}
      >
        <FaInbox className="inline-block text-3xl text-red-600" />
        <br />
        Inbox
      </Link>
      <Link
        href="/labs"
        id="wd-labs-link"
        className={isActive("/labs") ? TILE_ACTIVE : TILE_IDLE}
      >
        <LiaCogSolid className="inline-block text-3xl text-red-600" />
        <br />
        Labs
      </Link>
      {/* With AI: sample help tile */}
      <Link href="/labs" id="wd-ai-nav-help" className={TILE_IDLE}>
        <FaCircleQuestion className="inline-block text-3xl text-red-600" />
        <br />
        Help
      </Link>
    </nav>
  );
}
