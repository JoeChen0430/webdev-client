"use client";

import { useState } from "react";

export default function BooleanStateVariables() {
  const [done, setDone] = useState(true);
  // On your own: a second boolean with its own message
  const [urgent, setUrgent] = useState(false);
  // With AI: sample boolean
  const [saved, setSaved] = useState(false);
  return (
    <div id="wd-boolean-state-variables">
      <h2>Boolean State Variables</h2>
      <p>{done ? "Done" : "Not done"}</p>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={done}
          onChange={() => setDone(!done)}
          id="wd-boolean-checkbox"
        />
        Done
      </label>
      {done && <div className="mt-2 rounded bg-yellow-100 p-2">Yay! Done</div>}
      <label className="mt-2 flex items-center gap-2">
        <input
          type="checkbox"
          checked={urgent}
          onChange={() => setUrgent(!urgent)}
          id="wd-boolean-urgent"
        />
        Urgent
      </label>
      {urgent && (
        <div className="mt-2 rounded bg-red-100 p-2">Handle this today!</div>
      )}
      <label className="mt-2 flex items-center gap-2">
        <input
          type="checkbox"
          checked={saved}
          onChange={() => setSaved(!saved)}
          id="wd-boolean-saved"
        />
        Saved
      </label>
      {saved && <div className="mt-2 rounded bg-green-100 p-2">Saved</div>}
      <hr />
    </div>
  );
}
