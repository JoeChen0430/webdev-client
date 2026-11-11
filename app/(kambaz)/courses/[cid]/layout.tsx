"use client";

import { ReactNode, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import "@/app/labs/lab2/tailwind/utilities.css";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import * as client from "../client";
import type { Course } from "../client";
import { useAccountContext } from "../../account/AccountContext";

export default function CoursesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const router = useRouter();
  const { currentUser } = useAccountContext();

  const [course, setCourse] = useState<Course | null>(null);
  const [showCourseNav, setShowCourseNav] = useState(true);
  // Stamped with the user it belongs to, so signing out or switching users
  // invalidates it by derivation instead of needing a reset.
  const [enrollment, setEnrollment] = useState<{
    userId: string;
    courseIds: string[];
  } | null>(null);

  // The course name for the breadcrumb is public data (GET /api/courses).
  useEffect(() => {
    const loadCourse = async () => {
      try {
        const all = await client.fetchAllCourses();
        setCourse(all.find((c) => c._id === courseId) ?? null);
      } catch {
        setCourse(null);
      }
    };
    void loadCourse();
  }, [courseId]);

  // 4.10.7, now server-side: the enrolled list comes from the session rather
  // than a Zustand store, so it survives a refresh.
  useEffect(() => {
    if (!currentUser) return;
    const userId = currentUser._id;
    const loadEnrollments = async () => {
      try {
        const mine = await client.findMyCourses();
        setEnrollment({ userId, courseIds: mine.map((c) => c._id) });
      } catch {
        // 401 or server down: do not lock anyone out over a failed request.
        setEnrollment({ userId, courseIds: [courseId] });
      }
    };
    void loadEnrollments();
  }, [currentUser, courseId]);

  // Only trust an answer that belongs to the user who is signed in right now.
  const myCourseIds =
    currentUser && enrollment?.userId === currentUser._id
      ? enrollment.courseIds
      : null;
  const blocked =
    !!currentUser && myCourseIds !== null && !myCourseIds.includes(courseId);
  const checking = !!currentUser && myCourseIds === null;

  useEffect(() => {
    if (blocked) {
      router.replace("/dashboard");
    }
  }, [blocked, router]);

  if (blocked) return null;
  return (
    <div id="wd-courses">
      <h2 className="text-2xl font-semibold text-red-600">
        <FaAlignJustify
          className="me-4 mb-1 inline cursor-pointer text-xl"
          onClick={() => setShowCourseNav(!showCourseNav)}
          title="Toggle course navigation"
        />
        <Breadcrumb course={course ?? undefined} />
        <span className="ms-2 text-base font-normal text-neutral-600">
          ({course?._id})
        </span>
      </h2>
      <hr className="my-3" />
      <div className="flex gap-4">
        {showCourseNav ? (
          <div className="hidden w-[140px] shrink-0 md:block">
            <CourseNavigation cid={courseId} />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          {/* Hold the body — not the whole screen — while the enrollment check
              is in flight, so a blocked user never sees the content flash. */}
          {checking ? (
            <p className="text-sm text-neutral-600">Checking enrollment…</p>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
}
