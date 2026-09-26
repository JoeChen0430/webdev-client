"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(7);
  return (
    <div id="wd-counter">
      <h2>Counter: {count}</h2>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        id="wd-counter-up-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Up
      </button>
      <button
        type="button"
        onClick={() => setCount(count - 1)}
        id="wd-counter-down-click"
        className="me-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Down
      </button>
      {/* On your own: my own reset */}
      <button
        type="button"
        onClick={() => setCount(7)}
        id="wd-counter-my-reset-click"
        className="me-2 rounded bg-teal-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Reset to 7
      </button>
      {/* With AI: sample reset */}
      <button
        type="button"
        onClick={() => setCount(7)}
        id="wd-counter-reset-click"
        className="rounded bg-neutral-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Reset
      </button>
      <hr />
    </div>
  );
}
