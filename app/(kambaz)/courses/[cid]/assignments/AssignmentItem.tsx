"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFileAlt, FaTrash } from "react-icons/fa";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
  onDelete,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
  onDelete?: () => void;
}) {
  const [confirming, setConfirming] = useState(false);
  return (
    <li className="wd-assignment-list-item mb-3 flex items-start gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
      <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
      <div className="min-w-0 flex-1">
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-neutral-900 no-underline"
        >
          {title}
        </Link>
        <div className="mt-1 text-sm text-neutral-600">{details}</div>
      </div>
      {onDelete && (
        <FaTrash
          className="mt-1 shrink-0 cursor-pointer text-red-600"
          title="Delete assignment"
          onClick={() => setConfirming(true)}
        />
      )}
      {/* 4.10.6.4: confirm before removing */}
      {confirming && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          id="wd-delete-assignment-dialog"
        >
          <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-lg">
            <h3 className="m-0 mb-2 text-lg font-semibold">
              Delete assignment
            </h3>
            <p className="mb-4 text-sm">
              Are you sure you want to remove {title}?
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                id="wd-delete-assignment-no"
                className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                onClick={() => setConfirming(false)}
              >
                No
              </button>
              <button
                type="button"
                id="wd-delete-assignment-yes"
                className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                onClick={() => {
                  setConfirming(false);
                  onDelete?.();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
