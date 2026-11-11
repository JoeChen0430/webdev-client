"use client";

import { useCallback, useEffect, useState } from "react";
import "@/app/labs/lab2/tailwind/utilities.css";
import CourseCard from "./CourseCard";
import * as client from "../courses/client";
import { emptyCourse, type Course } from "../courses/client";
import { useAccountContext } from "../account/AccountContext";

const FIELD =
  "mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5";

export default function Dashboard() {
  const { currentUser } = useAccountContext();
  const [courses, setCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course>(emptyCourse);
  // 5.4.5.1 — the list is whatever Express returns, so the Chapter 4 Zustand
  // store is no longer the source of truth and no filtering happens here.
  // The toggle only decides WHICH server call to make.
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [enrolledIds, setEnrolledIds] = useState<string[]>([]);

  // The loader returns data instead of writing state, so the effect below is
  // the only place that fans it out into setState.
  const loadCourses = useCallback(async () => {
    const empty = { courses: [] as Course[], enrolledIds: [] as string[] };
    // Signed out: /api/users/current/courses answers 401, so fall back to the
    // public list. That keeps the Dashboard readable on the deploy URL.
    if (!currentUser) {
      try {
        return { courses: await client.fetchAllCourses(), enrolledIds: [] };
      } catch {
        return empty;
      }
    }
    try {
      const mine = await client.findMyCourses();
      return {
        courses: showAllCourses ? await client.fetchAllCourses() : mine,
        enrolledIds: mine.map((c) => c._id),
      };
    } catch {
      return empty;
    }
  }, [currentUser, showAllCourses]);

  const refresh = async () => {
    const data = await loadCourses();
    setCourses(data.courses);
    setEnrolledIds(data.enrolledIds);
  };

  // currentUser is a dependency so signing in as someone else reloads the list.
  useEffect(() => {
    const load = async () => {
      const data = await loadCourses();
      setCourses(data.courses);
      setEnrolledIds(data.enrolledIds);
    };
    void load();
  }, [loadCourses]);

  const isEnrolled = (courseId: string) => enrolledIds.includes(courseId);

  const addCourse = async () => {
    try {
      await client.createCourse(course);
      await refresh();
    } catch {
      /* 401 when signed out, or the server is down */
    }
  };

  const updateCourse = async () => {
    try {
      await client.updateCourse(course);
      await refresh();
    } catch {
      /* nothing to update */
    }
  };

  const deleteCourse = async (courseId: string) => {
    try {
      await client.deleteCourse(courseId);
      await refresh();
    } catch {
      /* already gone */
    }
  };

  // 5.4.8 — enrolling writes to the server, then the list is re-read so the
  // change survives a refresh.
  const toggleEnrollment = async (courseId: string) => {
    try {
      if (isEnrolled(courseId)) {
        await client.unenrollFromCourse(courseId);
      } else {
        await client.enrollIntoCourse(courseId);
      }
      await refresh();
    } catch {
      /* not signed in */
    }
  };

  return (
    <div id="wd-dashboard">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 id="wd-dashboard-title" className="text-3xl font-semibold">
          Dashboard
        </h1>
        {currentUser && (
          <button
            type="button"
            id="wd-enrollments-toggle"
            onClick={() => setShowAllCourses(!showAllCourses)}
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            Enrollments
          </button>
        )}
      </div>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={addCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={updateCourse}
        >
          Update
        </button>
      </h5>
      <input
        className={`mt-2 ${FIELD}`}
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className={FIELD}
        rows={3}
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        id="wd-course-description"
      />
      <input
        className={FIELD}
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number-mine"
      />
      <input
        type="date"
        className={FIELD}
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <input
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <hr />
      <h2 id="wd-dashboard-published" className="my-3 text-xl font-semibold">
        Published Courses ({courses.length})
      </h2>
      <hr className="mb-4" />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            {...c}
            onEdit={() => setCourse(c)}
            onDelete={() => deleteCourse(c._id)}
            enrolled={isEnrolled(c._id)}
            locked={!!currentUser && !isEnrolled(c._id)}
            onToggleEnrollment={
              currentUser ? () => toggleEnrollment(c._id) : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}
