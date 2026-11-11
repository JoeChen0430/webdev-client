import axios from "axios";

// 5.2.5.3 — one client library instead of axios calls scattered in components.
// A change to a URL is one edit here, not one per screen.
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ASSIGNMENT_API = `${HTTP_SERVER}/lab5/assignment`;
const TODOS_API = `${HTTP_SERVER}/lab5/todos`;

export type Assignment = {
  id: number;
  title: string;
  description: string;
  due: string;
  completed: boolean;
  score: number;
};

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
  // Local-only flag: true while the title input is open. It is never sent to
  // the server as anything meaningful, it just rides along in the PUT body.
  editing?: boolean;
};

export const fetchWelcomeMessage = async () => {
  const response = await axios.get<string>(`${HTTP_SERVER}/lab5/welcome`);
  return response.data;
};

// ---------- objects (5.2.5.5) ----------
export const fetchAssignment = async () => {
  const response = await axios.get<Assignment>(ASSIGNMENT_API);
  return response.data;
};

export const updateTitle = async (title: string) => {
  const response = await axios.get<Assignment>(
    `${ASSIGNMENT_API}/title/${title}`,
  );
  return response.data;
};

// ---------- arrays (5.2.5.6 - 5.2.5.8) ----------
export const fetchTodos = async () => {
  const response = await axios.get<Todo[]>(TODOS_API);
  return response.data;
};

// GET flavour: the server answers with the whole array.
export const createNewTodo = async () => {
  const response = await axios.get<Todo[]>(`${TODOS_API}/create`);
  return response.data;
};

export const removeTodo = async (todo: Todo) => {
  const response = await axios.get<Todo[]>(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};

// ---------- JSON in the body (5.2.6) ----------
// POST answers with only the new todo, so the component appends it.
export const postNewTodo = async (todo: {
  title: string;
  completed: boolean;
}) => {
  const response = await axios.post<Todo>(TODOS_API, todo);
  return response.data;
};

export const deleteTodo = async (todo: Todo) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};

export const updateTodo = async (todo: Todo) => {
  const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
  return response.data;
};
