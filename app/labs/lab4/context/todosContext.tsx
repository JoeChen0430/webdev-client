"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Todo = { id: string; title: string };

type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn React Context" },
    { id: "2", title: "Compare Context with Zustand" },
  ]);

  const addTodo = (title: string) =>
    setTodos([...todos, { id: new Date().getTime().toString(), title }]);

  const updateTodo = (id: string, title: string) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, title } : t)));

  const deleteTodo = (id: string) =>
    setTodos(todos.filter((t) => t.id !== id));

  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }
  return value;
}
