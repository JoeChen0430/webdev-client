"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import "@/app/labs/lab2/tailwind/utilities.css";
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

const LABEL = "mb-1 block text-sm font-medium";
const FIELD =
  "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";
const ROW = "mb-4";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const assignmentId = typeof aid === "string" ? aid : "";
  const router = useRouter();

  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );

  // "new" opens a blank draft; any other id loads that assignment.
  const isNew = assignmentId === "new";
  const existing = assignments.find((a) => a._id === assignmentId);
  const [assignment, setAssignment] = useState<Assignment>(
    isNew ? emptyAssignment(courseId) : (existing ?? emptyAssignment(courseId)),
  );

  const save = () => {
    if (isNew) {
      addAssignment({ ...assignment, course: courseId });
    } else {
      updateAssignment(assignment);
    }
    router.push(`/courses/${courseId}/assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className={ROW}>
        <label htmlFor="wd-name" className={LABEL}>
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          className={FIELD}
        />
      </div>

      {/* With AI (ch3): show which assignment the URL selected */}
      <p id="wd-ai-assignment-id" className="mb-4 text-sm text-neutral-600">
        Assignment id: {assignmentId}
      </p>

      <div className={ROW}>
        <label htmlFor="wd-description" className={LABEL}>
          Description
        </label>
        <textarea
          id="wd-description"
          rows={8}
          className={FIELD}
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="wd-points" className={LABEL}>
            Points
          </label>
          <input
            id="wd-points"
            type="number"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({
                ...assignment,
                points: parseInt(e.target.value) || 0,
              })
            }
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="wd-group" className={LABEL}>
            Assignment Group
          </label>
          <select id="wd-group" defaultValue="ASSIGNMENTS" className={FIELD}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
        <div>
          <label htmlFor="wd-display-grade-as" className={LABEL}>
            Display Grade as
          </label>
          <select
            id="wd-display-grade-as"
            defaultValue="PERCENTAGE"
            className={FIELD}
          >
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
            <option value="LETTER">Letter Grade</option>
            <option value="COMPLETE">Complete/Incomplete</option>
          </select>
        </div>
        <div>
          <label htmlFor="wd-submission-type" className={LABEL}>
            Submission Type
          </label>
          <select id="wd-submission-type" defaultValue="ONLINE" className={FIELD}>
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
            <option value="NO_SUBMISSION">No Submission</option>
          </select>
        </div>
      </div>

      <fieldset className="mt-4 rounded border border-neutral-300 p-3">
        <legend className="px-1 text-sm font-medium">
          Online Entry Options
        </legend>
        <div className="flex flex-col gap-2 text-sm">
          <div>
            <input type="checkbox" id="wd-text-entry" className="me-2" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="wd-website-url"
              defaultChecked
              className="me-2"
            />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div>
            <input type="checkbox" id="wd-media-recordings" className="me-2" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div>
            <input type="checkbox" id="wd-student-annotation" className="me-2" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div>
            <input type="checkbox" id="wd-file-upload" className="me-2" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
      </fieldset>

      <fieldset className="mt-4 rounded border border-neutral-300 p-3">
        <legend className="px-1 text-sm font-medium">Assign</legend>
        <div className={ROW}>
          <label htmlFor="wd-assign-to" className={LABEL}>
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className={FIELD} />
        </div>
        <div className={ROW}>
          <label htmlFor="wd-due-date" className={LABEL}>
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            value={assignment.due}
            onChange={(e) =>
              setAssignment({ ...assignment, due: e.target.value })
            }
            className={FIELD}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="wd-available-from" className={LABEL}>
              Available from
            </label>
            <input
              type="date"
              id="wd-available-from"
              value={assignment.available}
              onChange={(e) =>
                setAssignment({ ...assignment, available: e.target.value })
              }
              className={FIELD}
            />
          </div>
          <div>
            <label htmlFor="wd-available-until" className={LABEL}>
              Until
            </label>
            <input
              type="date"
              id="wd-available-until"
              value={assignment.due}
              onChange={(e) =>
                setAssignment({ ...assignment, due: e.target.value })
              }
              className={FIELD}
            />
          </div>
        </div>
      </fieldset>

      {/* With AI (ch2): sample notes field */}
      <div className="mt-4">
        <label htmlFor="wd-ai-editor-notes" className={LABEL}>
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={3} className={FIELD} />
      </div>

      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        {/* Cancel navigates back without writing the store */}
        <Link
          href={`/courses/${courseId}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <button
          type="button"
          onClick={save}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
