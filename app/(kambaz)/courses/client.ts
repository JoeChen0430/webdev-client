import axios from "axios";
import type { User } from "../account/client";

// Enrolled-course calls need the session cookie (5.4.3.2); the public reads do
// not, but sending the cookie anyway is harmless and keeps the calls uniform.
const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;

export type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  term: string;
  description: string;
  image: string;
};

export type Lesson = {
  _id: string;
  name: string;
  description?: string;
  module?: string;
};

export type Module = {
  _id: string;
  name: string;
  description?: string;
  course: string;
  lessons?: Lesson[];
  // Local-only: true while the rename input is open. Stripped before the PUT.
  editing?: boolean;
};

export type Assignment = {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  due: string;
  available: string;
  until: string;
};

export const emptyCourse: Course = {
  _id: "0",
  name: "New Course",
  number: "New Number",
  startDate: "2023-09-10",
  endDate: "2023-12-15",
  department: "D123",
  credits: 4,
  term: "Spring 2023",
  description: "New Description",
  image: "/images/reactjs.png",
};

export const emptyAssignment = (course: string): Assignment => ({
  _id: "new",
  title: "New Assignment",
  course,
  description: "New Assignment Description",
  points: 100,
  due: "2024-05-13",
  available: "2024-05-06",
  until: "2024-05-20",
});

// ---------- courses (5.4.5) ----------
export const fetchAllCourses = async () => {
  const { data } = await axios.get<Course[]>(COURSES_API);
  return data;
};

// The Dashboard list: Express reads the session and filters by enrollment.
export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get<Course[]>(
    `${USERS_API}/current/courses`,
  );
  return data;
};

// Posting to /api/users/current/courses also enrolls the creator (5.4.5.2).
export const createCourse = async (course: Course) => {
  const { data } = await axiosWithCredentials.post<Course>(
    `${USERS_API}/current/courses`,
    course,
  );
  return data;
};

export const deleteCourse = async (courseId: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${courseId}`);
  return data;
};

export const updateCourse = async (course: Course) => {
  const { data } = await axios.put<Course>(
    `${COURSES_API}/${course._id}`,
    course,
  );
  return data;
};

// ---------- enrollments (5.4.8) ----------
export const enrollIntoCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses/${courseId}`,
  );
  return data;
};

export const unenrollFromCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${USERS_API}/current/courses/${courseId}`,
  );
  return data;
};

// ---------- modules (5.4.6) ----------
// Nested in the UI, flat on the server: the course id is only needed to read
// and create; update and delete address the module directly.
export const findModulesForCourse = async (courseId: string) => {
  const { data } = await axios.get<Module[]>(`${COURSES_API}/${courseId}/modules`);
  return data;
};

export const createModuleForCourse = async (
  courseId: string,
  module: Partial<Module>,
) => {
  const { data } = await axios.post<Module>(
    `${COURSES_API}/${courseId}/modules`,
    module,
  );
  return data;
};

export const deleteModule = async (moduleId: string) => {
  const { data } = await axios.delete(`${MODULES_API}/${moduleId}`);
  return data;
};

export const updateModule = async (module: Module) => {
  // `editing` is a UI flag; the server has no business storing it.
  const { editing, ...persisted } = module;
  void editing;
  const { data } = await axios.put<Module>(
    `${MODULES_API}/${module._id}`,
    persisted,
  );
  return data;
};

// ---------- assignments (5.4.7) ----------
export const findAssignmentsForCourse = async (courseId: string) => {
  const { data } = await axios.get<Assignment[]>(
    `${COURSES_API}/${courseId}/assignments`,
  );
  return data;
};

export const findAssignmentById = async (assignmentId: string) => {
  const { data } = await axios.get<Assignment>(
    `${ASSIGNMENTS_API}/${assignmentId}`,
  );
  return data;
};

export const createAssignmentForCourse = async (
  courseId: string,
  assignment: Partial<Assignment>,
) => {
  const { data } = await axios.post<Assignment>(
    `${COURSES_API}/${courseId}/assignments`,
    assignment,
  );
  return data;
};

export const updateAssignment = async (assignment: Assignment) => {
  const { data } = await axios.put<Assignment>(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment,
  );
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const { data } = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return data;
};

// ---------- people (5.4.9) ----------
export const findUsersForCourse = async (courseId: string) => {
  const { data } = await axios.get<User[]>(`${COURSES_API}/${courseId}/users`);
  return data;
};
