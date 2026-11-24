"use client";

import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
import type { User } from "../../../account/client";

// 6.2.6.2 — this used to be the People *page*, which fetched its own users and
// filtered them against enrollments in the browser. It is a presentational
// component now: the parent decides which users to pass. The ADMIN Users
// screen passes every user in the collection, the course People screen passes
// only the ones enrolled in that course, and the filtering that decides which
// is which happens on the server where the data access rules belong.
export default function PeopleTable({
  users = [],
  fetchUsers,
}: {
  users?: User[];
  fetchUsers: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);

  const closeDetails = () => {
    setShowDetails(false);
    // Re-read the list so an edit or a delete made inside the panel is visible
    // in the table without a page refresh.
    fetchUsers();
  };

  return (
    <div id="wd-people-table" className="overflow-x-auto">
      {showDetails && (
        <PeopleDetails
          key={showUserId}
          uid={showUserId}
          onClose={closeDetails}
        />
      )}
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td
                className="wd-full-name cursor-pointer p-2 text-nowrap"
                onClick={() => {
                  setShowUserId(user._id);
                  setShowDetails(true);
                }}
              >
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
