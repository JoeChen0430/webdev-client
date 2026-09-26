"use client";

import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");

  return (
    <div id="wd-context-todo-list" className="max-w-md">
      <h3>Context Todo List</h3>
      <div className="mb-2 flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo"
          id="wd-context-todo-input"
          className="flex-1 rounded border border-neutral-300 px-3 py-1.5"
        />
        <button
          type="button"
          id="wd-context-todo-add-click"
          onClick={() => {
            if (title.trim()) {
              addTodo(title.trim());
              setTitle("");
            }
          }}
          className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Add
        </button>
      </div>
      <ul className="m-0 list-none p-0">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-1 flex items-center gap-2">
            <input
              value={todo.title}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
              className="flex-1 rounded border border-neutral-300 px-2 py-1"
            />
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              className="rounded bg-red-600 px-2 py-1 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
