"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import PeopleTable from "../Table";
import * as client from "../../../client";
import type { User } from "../../../../account/client";

// 6.4.3.5 — the course roster. The table markup moved to ../Table.tsx so the
// ADMIN Users screen can reuse it; this page only decides *which* users to
// show, and GET /api/courses/:cid/users answers that from the enrollments
// collection rather than from a filter running in the browser.
export default function CoursePeople() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const [users, setUsers] = useState<User[]>([]);

  // The loader returns data instead of writing state, so the effect below is
  // the only place that calls setState (React 19 set-state-in-effect).
  const loadUsers = useCallback(async () => {
    try {
      return await client.findUsersForCourse(courseId);
    } catch {
      return [];
    }
  }, [courseId]);

  const fetchUsers = async () => setUsers(await loadUsers());

  useEffect(() => {
    const load = async () => setUsers(await loadUsers());
    void load();
  }, [loadUsers]);

  return <PeopleTable users={users} fetchUsers={fetchUsers} />;
}
