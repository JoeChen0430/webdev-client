"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaPencilAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";
import type { Todo } from "./client";

// 5.2.5.6 - 5.2.6.4 — the todos array over axios. Both generations of each
// operation are here on purpose: the GET links from 5.2.4 still work, and the
// POST / DELETE / PUT versions from 5.2.6 use the proper HTTP verb.
export default function WorkingWithRemoteArraysAsync() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // 5.2.6.4 — the server answers a missing id with 404 and a JSON message.
  const reportError = (error: unknown, fallback: string) => {
    if (axios.isAxiosError(error)) {
      setErrorMessage(error.response?.data?.message ?? fallback);
      return;
    }
    setErrorMessage(fallback);
  };

  const fetchTodos = async () => {
    setTodos(await client.fetchTodos());
  };

  useEffect(() => {
    const load = async () => {
      try {
        setTodos(await client.fetchTodos());
      } catch {
        setTodos([]);
      }
    };
    void load();
  }, []);

  // GET flavour (5.2.5.8): the server answers with the whole array.
  const createNewTodo = async () => {
    setTodos(await client.createNewTodo());
  };

  // POST flavour (5.2.6.1): the server answers with only the new todo.
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };

  // GET flavour (5.2.5.7).
  const removeTodo = async (todo: Todo) => {
    setTodos(await client.removeTodo(todo));
  };

  // DELETE flavour (5.2.6.2) with 404 handling (5.2.6.4).
  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
      setErrorMessage(null);
    } catch (error) {
      reportError(error, `Unable to delete Todo with ID ${todo.id}`);
    }
  };

  // 5.2.6.3 — the pencil opens an input; Enter closes it and PUTs the change.
  const editTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
  };

  const updateTodo = async (todo: Todo) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setErrorMessage(null);
    } catch (error) {
      reportError(error, `Unable to update Todo with ID ${todo.id}`);
    }
  };

  return (
    <div id="wd-working-with-arrays-async" className="mb-6">
      <h3 className="text-xl font-semibold">
        Working with Arrays Asynchronously
      </h3>

      <h4 className="mt-3 flex items-center gap-2 text-lg font-semibold">
        Todos
        {/* wd-create-todo and wd-remove-todo already identify the §5.2.4 links
            earlier on this page, and an id has to be unique in a document, so
            the axios twins of those two take -async names. */}
        <FaPlusCircle
          onClick={createNewTodo}
          id="wd-create-todo-async"
          title="Create (HTTP GET)"
          className="cursor-pointer text-green-600"
        />
        <FaPlusCircle
          onClick={postNewTodo}
          id="wd-post-todo"
          title="Create (HTTP POST)"
          className="cursor-pointer text-blue-600"
        />
      </h4>

      {errorMessage && (
        <p
          id="wd-todo-error-message"
          className="mb-2 rounded bg-red-100 px-3 py-2 text-red-800"
        >
          {errorMessage}
        </p>
      )}

      <ul id="wd-todo-list" className="m-0 list-none p-0">
        {/* The book's listing repeats one id per row. Rows need distinct ids,
            so the first row carries the canonical name and the rest are
            suffixed with the todo's own id. */}
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className="mb-2 flex flex-wrap items-center gap-2 text-sm"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />
            {todo.editing ? (
              <input
                className="rounded border border-neutral-300 px-2 py-1"
                defaultValue={todo.title}
                onChange={(e) =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...t, title: e.target.value } : t,
                    ),
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    void updateTodo({ ...todo, editing: false });
                  }
                }}
              />
            ) : (
              <span className={todo.completed ? "line-through" : ""}>
                {todo.title}
              </span>
            )}
            <FaPencilAlt
              onClick={() => editTodo(todo)}
              title="Edit title"
              className="cursor-pointer text-blue-600"
            />
            <FaTrash
              onClick={() => removeTodo(todo)}
              id={
                index === 0 ? "wd-remove-todo-async" : `wd-remove-todo-${todo.id}`
              }
              title="Remove (HTTP GET)"
              className="cursor-pointer text-red-600"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              id={index === 0 ? "wd-delete-todo" : `wd-delete-todo-${todo.id}`}
              title="Delete (HTTP DELETE)"
              className="cursor-pointer text-2xl text-red-600"
            />
          </li>
        ))}
      </ul>
      <button
        type="button"
        id="wd-reload-todos"
        onClick={fetchTodos}
        className="mt-2 rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
      >
        Reload from server
      </button>
    </div>
  );
}
