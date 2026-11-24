import axios from "axios";

// 6.2 — same arrangement as Lab 5: one client library for the whole lab, so a
// URL change is one edit here rather than one per component.
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const LAB6_API = `${HTTP_SERVER}/lab6`;
const TODOS_API = `${LAB6_API}/todos`;

// What the Express side reports about its Mongoose connection. `state` is the
// readyState name — disconnected / connected / connecting / disconnecting —
// which is the useful bit when DATABASE_CONNECTION_STRING is wrong.
export type ConnectionStatus = {
  connected: boolean;
  state: string;
  database?: string;
  host?: string;
};

// MongoDB primary keys are strings here, not the numbers Lab 5 used, because
// §6.2.5 generates them with uuidv4() instead of counting array entries.
export type Todo = {
  _id: string;
  title: string;
  completed: boolean;
};

export const STATUS_URL = `${LAB6_API}/status`;

export const fetchConnectionStatus = async () => {
  const response = await axios.get<ConnectionStatus>(STATUS_URL);
  return response.data;
};

export const fetchTodos = async () => {
  const response = await axios.get<Todo[]>(TODOS_API);
  return response.data;
};

// The predicate version from §6.2.6.3, encoded as a query parameter.
export const fetchCompletedTodos = async () => {
  const response = await axios.get<Todo[]>(`${TODOS_API}?completed=true`);
  return response.data;
};

export const createTodo = async (title: string) => {
  const response = await axios.post<Todo>(TODOS_API, { title });
  return response.data;
};

export const updateTodo = async (todo: Todo) => {
  const response = await axios.put<Todo>(`${TODOS_API}/${todo._id}`, todo);
  return response.data;
};

export const deleteTodo = async (todoId: string) => {
  const response = await axios.delete(`${TODOS_API}/${todoId}`);
  return response.data;
};

// The Users demo in §6.2.6.7 is the Kambaz Users screen, not a lab-only
// endpoint, so it reuses the account client rather than duplicating it. These
// re-exports keep the lab components importing only "./client", the way every
// Lab 5 component does.
export {
  findAllUsers,
  findUsersByRole,
  findUsersByPartialName,
  createUser,
  deleteUser,
  updateUser,
} from "@/app/(kambaz)/account/client";
export type { User } from "@/app/(kambaz)/account/client";
