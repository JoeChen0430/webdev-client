"use client";

import { useEffect, useState } from "react";

// 5.3 — same-origin fetch, so no CORS and no companion server needed.
export default function HelloRoute() {
  const [payload, setPayload] = useState<unknown>({});

  useEffect(() => {
    const load = async () => {
      const response = await fetch("/api/lab5/hello");
      setPayload(await response.json());
    };
    void load();
  }, []);

  return (
    <div id="wd-hello-route" className="mb-6">
      <h4 className="text-lg font-semibold">
        GET /api/lab5/hello (Next.js Route Handler)
      </h4>
      <pre
        id="wd-hello-route-payload"
        className="overflow-x-auto rounded bg-neutral-100 p-3 text-xs"
      >
        {JSON.stringify(payload, null, 2)}
      </pre>
    </div>
  );
}
