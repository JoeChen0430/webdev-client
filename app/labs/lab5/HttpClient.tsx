"use client";

import { useEffect, useState } from "react";
import * as client from "./client";

// 5.2.5.1 - 5.2.5.4 — axios instead of hyperlinks, so the response lands in
// state and the page never navigates away.
export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

  const fetchWelcomeOnClick = async () => {
    setWelcomeOnClick(await client.fetchWelcomeMessage());
  };

  // 5.2.5.4 — the same request, but fired when the component mounts.
  useEffect(() => {
    const fetchWelcomeOnLoad = async () => {
      try {
        setWelcomeOnLoad(await client.fetchWelcomeMessage());
      } catch {
        setWelcomeOnLoad("(companion server on port 4000 is not running)");
      }
    };
    void fetchWelcomeOnLoad();
  }, []);

  return (
    <div id="wd-http-client" className="mb-6">
      <h3 className="text-xl font-semibold">HTTP Client</h3>

      <h4 className="mt-3 text-lg font-semibold">Requesting on Click</h4>
      <button
        type="button"
        id="wd-fetch-welcome"
        onClick={fetchWelcomeOnClick}
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      >
        Fetch Welcome
      </button>
      <p>
        Response from server: <b id="wd-welcome-on-click">{welcomeOnClick}</b>
      </p>

      <h4 className="mt-3 text-lg font-semibold">Requesting on Load</h4>
      <p>
        Response from server: <b id="wd-welcome-on-load">{welcomeOnLoad}</b>
      </p>
    </div>
  );
}
