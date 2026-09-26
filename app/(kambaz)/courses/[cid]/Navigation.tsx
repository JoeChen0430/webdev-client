"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import "../../kambaz.css";

const IDLE = "list-group-item border-0 text-red-600";
const ACTIVE = "list-group-item active border-0";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const linkClass = (path: string) =>
    pathname === path || pathname.startsWith(path + "/") ? ACTIVE : IDLE;

  const links = [
    { id: "wd-course-home-link", label: "Home", path: `/courses/${cid}/home` },
    {
      id: "wd-course-modules-link",
      label: "Modules",
      path: `/courses/${cid}/modules`,
    },
    {
      id: "wd-course-piazza-link",
      label: "Piazza",
      path: `/courses/${cid}/piazza`,
    },
    { id: "wd-course-zoom-link", label: "Zoom", path: `/courses/${cid}/zoom` },
    {
      id: "wd-course-assignments-link",
      label: "Assignments",
      path: `/courses/${cid}/assignments`,
    },
    {
      id: "wd-course-quizzes-link",
      label: "Quizzes",
      path: `/courses/${cid}/quizzes`,
    },
    {
      id: "wd-course-grades-link",
      label: "Grades",
      path: `/courses/${cid}/grades`,
    },
    {
      id: "wd-course-people-link",
      label: "People",
      path: `/courses/${cid}/people/table`,
    },
  ];

  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group rounded-none text-lg"
    >
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.path}
          id={link.id}
          className={linkClass(link.path)}
        >
          {link.label}
        </Link>
      ))}
      {/* With AI: sample course link, always idle styling */}
      <Link href={`/courses/${cid}/home`} id="wd-course-ai-link" className={IDLE}>
        Sample
      </Link>
    </div>
  );
}
