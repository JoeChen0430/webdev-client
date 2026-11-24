"use client";

import { useState } from "react";
import axios from "axios";
import * as client from "./client";

// 6.2.2 — the first thing to check after setting DATABASE_CONNECTION_STRING.
// Express answers with its Mongoose readyState, so a wrong connection string
// shows up here as "disconnected" instead of as a ten-second hang on the first
// query somewhere else in Kambaz.
export default function ConnectionStatus() {
  const [output, setOutput] = useState("Click to read the connection status.");

  const readStatus = async () => {
    setOutput("Reading…");
    try {
      const status = await client.fetchConnectionStatus();
      setOutput(JSON.stringify(status, null, 2));
    } catch (error) {
      const detail = axios.isAxiosError(error)
        ? (error.response?.data?.message ?? error.message)
        : "Unknown error";
      setOutput(`Could not reach ${client.STATUS_URL}\n${detail}`);
    }
  };

  return (
    <div id="wd-lab6-connection" className="mb-6">
      <h3 className="text-xl font-semibold">MongoDB connection</h3>
      <p className="text-sm text-neutral-600">
        Express reads <code>DATABASE_CONNECTION_STRING</code>. This demo asks
        the server whether Mongoose actually connected.
      </p>
      <button
        type="button"
        id="wd-lab6-status"
        onClick={readStatus}
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      >
        Read connection status
      </button>
      <pre
        id="wd-lab6-status-output"
        className="mt-2 overflow-x-auto rounded bg-neutral-100 p-2 text-sm"
      >
        {output}
      </pre>
      <hr className="my-3" />
    </div>
  );
}
