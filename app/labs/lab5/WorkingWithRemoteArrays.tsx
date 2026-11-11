"use client";

import { useState } from "react";

// 5.2.4 — the hyperlink version of the todos CRUD. Every link navigates away
// and shows raw JSON; WorkingWithRemoteArraysAsync does the same work with
// axios and stays on the page.
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const API = `${HTTP_SERVER}/lab5/todos`;

const FIELD = "rounded border border-neutral-300 px-2 py-1 text-sm";
const LINK =
  "inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";

export default function WorkingWithRemoteArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "Task 1",
    description: "Sample description",
    completed: false,
  });

  const seg = (value: string) => encodeURIComponent(value);

  return (
    <div id="wd-working-with-arrays" className="mb-6">
      <h3 className="text-xl font-semibold">Working with Arrays</h3>

      <h4 className="mt-3 text-lg font-semibold">Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className={LINK} href={API}>
        Get Todos
      </a>

      <h4 className="mt-3 text-lg font-semibold">
        Retrieving an Item from an Array by ID
      </h4>
      <div className="flex flex-wrap items-center gap-2">
        <input
          id="wd-todo-id"
          className={`w-24 ${FIELD}`}
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
        <a id="wd-retrieve-todo-by-id" className={LINK} href={`${API}/${todo.id}`}>
          Get Todo by ID
        </a>
      </div>

      <h4 className="mt-3 text-lg font-semibold">Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className={LINK}
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>

      <h4 className="mt-3 text-lg font-semibold">
        Creating new Items in an Array
      </h4>
      <a id="wd-create-todo" className={LINK} href={`${API}/create`}>
        Create Todo
      </a>

      <h4 className="mt-3 text-lg font-semibold">Removing from an Array</h4>
      <a id="wd-remove-todo" className={LINK} href={`${API}/${todo.id}/delete`}>
        Remove Todo with ID = {todo.id}
      </a>

      <h4 className="mt-3 text-lg font-semibold">
        Updating an Item in an Array
      </h4>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <input
            id="wd-todo-title"
            className={FIELD}
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
          <a
            id="wd-update-todo-title"
            className={LINK}
            href={`${API}/${todo.id}/title/${seg(todo.title)}`}
          >
            Update Todo
          </a>
        </div>
        {/* 5.2.4.7 On your own: completed and description */}
        <div className="flex flex-wrap items-center gap-2">
          <label htmlFor="wd-todo-completed" className="text-sm">
            <input
              id="wd-todo-completed"
              type="checkbox"
              className="me-2"
              checked={todo.completed}
              onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
            />
            Completed
          </label>
          <a
            id="wd-update-todo-completed"
            className={LINK}
            href={`${API}/${todo.id}/completed/${todo.completed}`}
          >
            Complete Todo ID = {todo.id}
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <input
            id="wd-todo-description"
            className={`w-80 max-w-full ${FIELD}`}
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
          <a
            id="wd-update-todo-description"
            className={LINK}
            href={`${API}/${todo.id}/description/${seg(todo.description)}`}
          >
            Describe Todo ID = {todo.id}
          </a>
        </div>
      </div>
    </div>
  );
}
