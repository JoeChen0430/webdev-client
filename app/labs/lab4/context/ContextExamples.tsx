"use client";

import { CounterProvider } from "./CounterContext";
import ContextCounterRead from "./ContextCounterRead";
import ContextCounterWrite from "./ContextCounterWrite";
import { TodosProvider } from "./todosContext";
import ReactContextTodoList from "./ReactContextTodoList";

export default function ContextExamples() {
  return (
    <div id="wd-context-examples">
      <h2>React Context</h2>
      <p>
        Two siblings share one counter without the parent passing props through
        the middle.
      </p>
      <CounterProvider>
        <ContextCounterRead />
        <ContextCounterWrite />
      </CounterProvider>
      {/* On your own: the Context todo list from 4.4.2 */}
      <TodosProvider>
        <ReactContextTodoList />
      </TodosProvider>
      <hr />
    </div>
  );
}
