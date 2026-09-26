"use client";

import { useState } from "react";
import "@/app/labs/lab2/tailwind/utilities.css";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";

const FIELD =
  "mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const [course, setCourse] = useState<Course>(emptyCourse);

  const { currentUser } = useAccountContext();
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  // 4.10.7: show every course, or only the enrolled ones
  const [showAllCourses, setShowAllCourses] = useState(false);

  const isEnrolled = (courseId: string) =>
    !!currentUser &&
    enrollments.some(
      (e) => e.user === currentUser._id && e.course === courseId,
    );

  const visibleCourses =
    currentUser && !showAllCourses
      ? courses.filter((c) => isEnrolled(c._id))
      : courses;

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
          onClick={() => addCourse(course)}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={() => updateCourse(course)}
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
      {/* On your own: number and start date on the course form */}
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
      {/* With AI: sample course-number field */}
      <input
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <hr />
      <h2 id="wd-dashboard-published" className="my-3 text-xl font-semibold">
        Published Courses ({visibleCourses.length})
      </h2>
      <hr className="mb-4" />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => (
          <CourseCard
            key={c._id}
            {...c}
            onEdit={() => setCourse(c)}
            onDelete={() => deleteCourse(c._id)}
            enrolled={isEnrolled(c._id)}
            onToggleEnrollment={
              currentUser
                ? () =>
                    isEnrolled(c._id)
                      ? unenroll(currentUser._id, c._id)
                      : enroll(currentUser._id, c._id)
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}
