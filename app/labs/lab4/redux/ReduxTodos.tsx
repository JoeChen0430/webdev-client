"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./store";
import ReduxTodoForm from "./ReduxTodoForm";
import ReduxTodoItem from "./ReduxTodoItem";

export default function ReduxTodos() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  // The draft title stays local; the array lives in the store.
  const [title, setTitle] = useState("Learn Mongo");
  const [editingId, setEditingId] = useState<string | null>(null);
  return (
    <div id="wd-redux-todos">
      <h3>Redux Todo List</h3>
      <ReduxTodoForm
        title={title}
        setTitle={setTitle}
        editingId={editingId}
        setEditingId={setEditingId}
      />
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <ReduxTodoItem
            key={todo.id}
            todo={todo}
            setTitle={setTitle}
            setEditingId={setEditingId}
          />
        ))}
      </ul>
    </div>
  );
}
