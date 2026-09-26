"use client";

import { create } from "zustand";
import enrollmentsJson from "../database/enrollments.json";

export type Enrollment = { _id: string; user: string; course: string };

type EnrollmentsStore = {
  enrollments: Enrollment[];
  enroll: (user: string, course: string) => void;
  unenroll: (user: string, course: string) => void;
  isEnrolled: (user: string, course: string) => boolean;
};

export const useEnrollmentsStore = create<EnrollmentsStore>((set, get) => ({
  enrollments: enrollmentsJson as Enrollment[],
  enroll: (user, course) =>
    set((state) =>
      state.enrollments.some((e) => e.user === user && e.course === course)
        ? state
        : {
            enrollments: [
              ...state.enrollments,
              { _id: crypto.randomUUID(), user, course },
            ],
          },
    ),
  unenroll: (user, course) =>
    set((state) => ({
      enrollments: state.enrollments.filter(
        (e) => !(e.user === user && e.course === course),
      ),
    })),
  isEnrolled: (user, course) =>
    get().enrollments.some((e) => e.user === user && e.course === course),
}));
