"use client";

import { useState } from "react";

function dateObjectToHtmlDateString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const FIELD = "mb-2 block rounded border border-neutral-300 px-3 py-1.5";

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date());
  // On your own: an end date
  const [endDate, setEndDate] = useState(new Date());
  // With AI: sample due date
  const [dueDate, setDueDate] = useState(new Date());
  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <h3>{JSON.stringify(startDate)}</h3>
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      <h3>endDate = {dateObjectToHtmlDateString(endDate)}</h3>
      <h3>dueDate = {dateObjectToHtmlDateString(dueDate)}</h3>
      <input
        type="date"
        className={FIELD}
        value={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
        id="wd-start-date"
      />
      <input
        type="date"
        className={FIELD}
        value={dateObjectToHtmlDateString(endDate)}
        onChange={(e) => setEndDate(new Date(e.target.value))}
        id="wd-end-date"
      />
      <input
        type="date"
        className={FIELD}
        value={dateObjectToHtmlDateString(dueDate)}
        onChange={(e) => setDueDate(new Date(e.target.value))}
        id="wd-due-date"
      />
      <hr />
    </div>
  );
}
