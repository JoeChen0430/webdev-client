"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { User } from "./client";

// The User shape now comes from the server contract in client.ts instead of
// being inferred from a local users.json — Express owns that data (5.4.1).
export type { User };

type AccountContextValue = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  // True until the server has said who is signed in (5.4.2.4). Without it,
  // "nobody is signed in" and "we have not asked yet" look identical, and
  // screens would bounce a signed-in user to Sign in on every page load.
  sessionPending: boolean;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUserState] = useState<User | null>(null);
  const [sessionPending, setSessionPending] = useState(true);

  // Any answer about the current user — including null — resolves the session.
  const setCurrentUser = useCallback((user: User | null) => {
    setCurrentUserState(user);
    setSessionPending(false);
  }, []);

  return (
    <AccountContext.Provider
      value={{ currentUser, setCurrentUser, sessionPending }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  const value = useContext(AccountContext);
  if (!value) {
    throw new Error("useAccountContext must be used inside AccountProvider");
  }
  return value;
}
