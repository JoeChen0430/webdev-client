import Link from "next/link";
import "@/app/labs/lab2/tailwind/utilities.css";

const LABEL = "mb-1 block text-sm font-medium";
const FIELD =
  "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";
const ROW = "mb-4";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className={ROW}>
        <label htmlFor="wd-name" className={LABEL}>
          Assignment Name
        </label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" className={FIELD} />
      </div>

      <div className={ROW}>
        <label htmlFor="wd-description" className={LABEL}>
          Description
        </label>
        <textarea
          id="wd-description"
          rows={8}
          className={FIELD}
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel. The landing page should include the following: your full name and section, links to each of the lab assignments, link to the Kambaz application, links to all relevant source code repositories. The Kambaz application should include a link to navigate back to the landing page."
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="wd-points" className={LABEL}>
            Points
          </label>
          <input id="wd-points" defaultValue={100} className={FIELD} />
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
            defaultValue="2024-05-13"
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
              defaultValue="2024-05-06"
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
              defaultValue="2024-05-20"
              className={FIELD}
            />
          </div>
        </div>
      </fieldset>

      {/* With AI: sample notes field */}
      <div className="mt-4">
        <label htmlFor="wd-ai-editor-notes" className={LABEL}>
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={3} className={FIELD} />
      </div>

      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
