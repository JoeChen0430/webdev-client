"use client";

import { useEffect, type ReactNode } from "react";
import { useAccountContext } from "./AccountContext";
import * as client from "./client";

// 5.4.2.4 — a full page load wipes React state but not the session cookie, so
// Kambaz asks the server who is signed in before any screen renders a name.
//
// It deliberately does NOT block rendering: if the companion server is down or
// a free Render instance is still waking up, the rest of Kambaz must still
// paint rather than hang on a pending request.
export default function Session({ children }: { children: ReactNode }) {
  const { setCurrentUser } = useAccountContext();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setCurrentUser(await client.profile());
      } catch {
        // 401 from Express simply means nobody is signed in. Either way the
        // call resolves sessionPending, so screens stop waiting.
        setCurrentUser(null);
      }
    };
    void fetchProfile();
  }, [setCurrentUser]);

  return <>{children}</>;
}
