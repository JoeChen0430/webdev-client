"use client";

import { useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import * as client from "./client";
import type { Todo } from "./client";

// 6.2.5 — every CRUD letter against a small todos collection before the same
// verbs are pointed at Kambaz users. The list starts empty on purpose: each
// button is one round trip you can watch in the Network tab and then confirm
// in Compass.
export default function Lab6Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("Learn Mongoose");
  const [message, setMessage] = useState("");

  const report = (error: unknown, fallback: string) => {
    if (axios.isAxiosError(error)) {
      setMessage(error.response?.data?.message ?? fallback);
      return;
    }
    setMessage(fallback);
  };

  const findAll = async () => {
    try {
      const data = await client.fetchTodos();
      setTodos(data);
      setMessage(`${data.length} todo(s) in the collection.`);
    } catch (error) {
      report(error, "Unable to read todos. Is Express running?");
    }
  };

  const findCompleted = async () => {
    try {
      const data = await client.fetchCompletedTodos();
      setTodos(data);
      setMessage(`${data.length} completed todo(s).`);
    } catch (error) {
      report(error, "Unable to read completed todos.");
    }
  };

  const create = async () => {
    try {
      const todo = await client.createTodo(title);
      setTodos([...todos, todo]);
      setMessage(`Created "${todo.title}".`);
    } catch (error) {
      report(error, "Unable to create the todo.");
    }
  };

  const toggleCompleted = async (todo: Todo, completed: boolean) => {
    try {
      await client.updateTodo({ ...todo, completed });
      setTodos(
        todos.map((t) => (t._id === todo._id ? { ...t, completed } : t)),
      );
      setMessage(`Updated "${todo.title}".`);
    } catch (error) {
      report(error, `Unable to update todo ${todo._id}.`);
    }
  };

  const remove = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo._id);
      setTodos(todos.filter((t) => t._id !== todo._id));
      setMessage(`Deleted "${todo.title}".`);
    } catch (error) {
      report(error, `Unable to delete todo ${todo._id}.`);
    }
  };

  return (
    <div id="wd-lab6-todos" className="mb-6">
      <h3 className="text-xl font-semibold">Lab 6 todos (Mongoose CRUD)</h3>
      <div className="mb-2 flex flex-wrap gap-2">
        <button
          type="button"
          id="wd-lab6-fetch-todos"
          onClick={findAll}
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        >
          Find all
        </button>
        <button
          type="button"
          id="wd-lab6-fetch-completed"
          onClick={findCompleted}
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        >
          Find completed
        </button>
        <button
          type="button"
          id="wd-lab6-create-todo"
          onClick={create}
          className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
        >
          Create
        </button>
      </div>
      <input
        id="wd-lab6-todo-title"
        className="mb-2 rounded border border-neutral-300 px-2 py-1 text-sm"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p id="wd-lab6-todo-message" className="text-sm text-neutral-600">
        {message}
      </p>
      <ul className="m-0 list-none p-0">
        {todos.map((todo) => (
          <li key={todo._id} className="mb-2 flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => toggleCompleted(todo, e.target.checked)}
            />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.title}
            </span>
            <FaTrash
              onClick={() => remove(todo)}
              title="Delete"
              className="cursor-pointer text-red-600"
            />
          </li>
        ))}
      </ul>
      <hr className="my-3" />
    </div>
  );
}
