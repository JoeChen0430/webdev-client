"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumb({
  course,
}: {
  course: { name: string } | undefined;
}) {
  const pathname = usePathname() ?? "";
  const section = pathname.split("/").pop() ?? "";
  // With AI: the People screen lives at people/table, so relabel that segment
  const label =
    section === "table"
      ? "People"
      : section.charAt(0).toUpperCase() + section.slice(1);
  return (
    <span>
      Course {course?.name} &gt; {label}
    </span>
  );
}
