import TodoItem from "./TodoItem";
import todos from "./todos.json";

export default function TodoList() {
  // On your own: log the todos array so the objects show in the console
  console.log(todos);
  return (
    <>
      <h3>Todo List</h3>
      <ul className="list-none p-0">
        {todos.map((todo) => (
          <TodoItem key={todo.title} todo={todo} />
        ))}
      </ul>
      <hr />
    </>
  );
}
