"use client";

import { redirect } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function AccountPage() {
  const { currentUser, sessionPending } = useAccountContext();

  // currentUser now arrives from the server (5.4.2.4), so it is null both when
  // nobody is signed in and while the profile request is still in flight.
  // Redirecting on the second case would sign a signed-in user out of the UI.
  if (sessionPending) {
    return <p className="text-sm text-neutral-600">Loading account…</p>;
  }
  redirect(currentUser ? "/account/profile" : "/account/signin");
}
