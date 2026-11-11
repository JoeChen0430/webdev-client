"use client";

import { useEffect, useState } from "react";
import * as client from "./client";
import type { Assignment } from "./client";

// 5.2.5.5 — the assignment object again, this time fetched on mount and
// updated with axios so the screen reflects what the server actually holds.
const FIELD = "w-full rounded border border-neutral-300 px-2 py-1 text-sm";

export default function WorkingWithRemoteObjectsAsync() {
  const [assignment, setAssignment] = useState<Assignment | null>(null);

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        setAssignment(await client.fetchAssignment());
      } catch {
        setAssignment(null);
      }
    };
    void fetchAssignment();
  }, []);

  const updateTitle = async () => {
    if (!assignment) return;
    setAssignment(await client.updateTitle(assignment.title));
  };

  return (
    <div id="wd-working-with-objects-async" className="mb-6">
      <h3 className="text-xl font-semibold">Working with Objects Asynchronously</h3>
      <h4 className="mt-3 text-lg font-semibold">Assignment</h4>
      {assignment ? (
        <div className="flex max-w-md flex-col gap-2">
          <input
            id="wd-async-assignment-title"
            className={FIELD}
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
          <input
            id="wd-async-assignment-description"
            className={FIELD}
            value={assignment.description}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
          />
          <input
            id="wd-async-assignment-score"
            type="number"
            className={FIELD}
            value={assignment.score}
            onChange={(e) =>
              setAssignment({
                ...assignment,
                score: parseInt(e.target.value) || 0,
              })
            }
          />
          <label htmlFor="wd-async-assignment-completed" className="text-sm">
            <input
              id="wd-async-assignment-completed"
              type="checkbox"
              className="me-2"
              checked={assignment.completed}
              onChange={(e) =>
                setAssignment({ ...assignment, completed: e.target.checked })
              }
            />
            Completed
          </label>
          <button
            type="button"
            id="wd-async-update-title"
            onClick={updateTitle}
            className="self-start rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          >
            Update Title
          </button>
          {/* The snapshot shows every property the server sent back, so you can
              see that Update Title really changed the remote object. */}
          <pre className="overflow-x-auto rounded bg-neutral-100 p-3 text-xs">
            {JSON.stringify(assignment, null, 2)}
          </pre>
        </div>
      ) : (
        <p className="text-sm text-neutral-600">
          Start the companion server on port 4000 to load the assignment.
        </p>
      )}
    </div>
  );
}
