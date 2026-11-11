"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import { useAccountContext } from "../AccountContext";
import ProfileForm from "./ProfileForm";

export default function Profile() {
  const { currentUser, sessionPending } = useAccountContext();
  const router = useRouter();

  // Only redirect once the server has actually said nobody is signed in. During
  // sessionPending a signed-in user would otherwise be bounced out on every
  // refresh — which is the exact problem §5.4.2.4 set out to fix.
  useEffect(() => {
    if (!sessionPending && !currentUser) {
      router.push("/account/signin");
    }
  }, [sessionPending, currentUser, router]);

  if (sessionPending) {
    return <p className="text-sm text-neutral-600">Loading profile…</p>;
  }
  if (!currentUser) return null;

  // Keyed so a different user remounts the form with their own values.
  return <ProfileForm key={currentUser._id} user={currentUser} />;
}
