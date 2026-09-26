"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import "@/app/labs/lab2/tailwind/utilities.css";
import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import { useAssignmentsStore } from "../../../store/assignmentsStore";

export default function Assignments() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const allAssignments = useAssignmentsStore((state) => state.assignments);
  const deleteAssignment = useAssignmentsStore(
    (state) => state.deleteAssignment,
  );
  const assignments = allAssignments.filter((a) => a.course === courseId);

  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="rounded border py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        <div className="flex gap-2">
          <button
            id="wd-add-assignment-group"
            type="button"
            className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"
          >
            <FaPlus /> Group
          </button>
          {/* 4.10.6.2: + Assignment navigates to the editor */}
          <Link
            id="wd-add-assignment"
            href={`/courses/${courseId}/assignments/new`}
            className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white no-underline"
          >
            <FaPlus /> Assignment
          </Link>
        </div>
      </div>
      <h3
        id="wd-assignments-title"
        className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg"
      >
        <span>ASSIGNMENTS 40% of Total</span>
        <button
          type="button"
          className="inline-flex items-center rounded border bg-white px-2 py-0.5 text-sm"
        >
          <FaPlus />
        </button>
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {assignments.map((assignment) => (
          <AssignmentItem
            key={assignment._id}
            cid={courseId}
            aid={assignment._id}
            title={assignment.title}
            details={`Multiple Modules | Not available until ${assignment.available} | Due ${assignment.due} | ${assignment.points} pts`}
            onDelete={() => deleteAssignment(assignment._id)}
          />
        ))}
      </ul>
    </div>
  );
}
