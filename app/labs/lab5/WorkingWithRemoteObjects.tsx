"use client";

import { useState } from "react";

// 5.2.3 — the assignment and module objects live in the server's process
// memory. Editing them here changes them there until the server restarts.
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

const FIELD = "rounded border border-neutral-300 px-2 py-1 text-sm";
const LINK =
  "inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";

export default function WorkingWithRemoteObjects() {
  // The seeds match the server's objects, so the first click is a no-op until
  // you actually type something.
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: "M101",
    name: "Introduction to Node.js",
    description: "Build HTTP servers and RESTful Web APIs with Express",
    course: "CS4550",
  });

  // Titles and descriptions contain spaces, and a typed "/" would otherwise
  // look like another path segment to Express.
  const seg = (value: string) => encodeURIComponent(value);

  return (
    <div id="wd-working-with-objects" className="mb-6">
      <h3 className="text-xl font-semibold">Working With Objects</h3>

      <h4 className="mt-3 text-lg font-semibold">Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className={LINK} href={ASSIGNMENT_API_URL}>
        Get Assignment
      </a>

      <h4 className="mt-3 text-lg font-semibold">Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className={LINK}
        href={`${ASSIGNMENT_API_URL}/title`}
      >
        Get Title
      </a>

      <h4 className="mt-3 text-lg font-semibold">Modifying Properties</h4>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <input
            id="wd-assignment-title"
            className={FIELD}
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
          <a
            id="wd-update-assignment-title"
            className={LINK}
            href={`${ASSIGNMENT_API_URL}/title/${seg(assignment.title)}`}
          >
            Update Title
          </a>
        </div>
        {/* 5.2.3.4 On your own: score and completed */}
        <div className="flex flex-wrap items-center gap-2">
          <input
            id="wd-assignment-score"
            type="number"
            className={`w-24 ${FIELD}`}
            value={assignment.score}
            onChange={(e) =>
              setAssignment({
                ...assignment,
                score: parseInt(e.target.value) || 0,
              })
            }
          />
          <a
            id="wd-update-assignment-score"
            className={LINK}
            href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
          >
            Update Score
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <label htmlFor="wd-assignment-completed" className="text-sm">
            <input
              id="wd-assignment-completed"
              type="checkbox"
              className="me-2"
              checked={assignment.completed}
              onChange={(e) =>
                setAssignment({ ...assignment, completed: e.target.checked })
              }
            />
            Completed
          </label>
          <a
            id="wd-update-assignment-completed"
            className={LINK}
            href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
          >
            Update Completed
          </a>
        </div>
      </div>

      {/* 5.2.3.4 On your own: the module object */}
      <h4 className="mt-3 text-lg font-semibold">Module (On Your Own)</h4>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2">
          <a id="wd-retrieve-module" className={LINK} href={MODULE_API_URL}>
            Get Module
          </a>
          <a
            id="wd-retrieve-module-name"
            className={LINK}
            href={`${MODULE_API_URL}/name`}
          >
            Get Module Name
          </a>
          <a
            id="wd-retrieve-module-description"
            className={LINK}
            href={`${MODULE_API_URL}/description`}
          >
            Get Module Description
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <input
            id="wd-module-name"
            className={FIELD}
            value={module.name}
            onChange={(e) => setModule({ ...module, name: e.target.value })}
          />
          <a
            id="wd-update-module-name"
            className={LINK}
            href={`${MODULE_API_URL}/name/${seg(module.name)}`}
          >
            Update Module Name
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <input
            id="wd-module-description"
            className={`w-80 max-w-full ${FIELD}`}
            value={module.description}
            onChange={(e) =>
              setModule({ ...module, description: e.target.value })
            }
          />
          <a
            id="wd-update-module-description"
            className={LINK}
            href={`${MODULE_API_URL}/description/${seg(module.description)}`}
          >
            Update Module Description
          </a>
        </div>
      </div>
    </div>
  );
}
