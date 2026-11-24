import "@/app/labs/lab2/tailwind/utilities.css";
import ConnectionStatus from "./Connection";
import Lab6Todos from "./Todos";
import Lab6Users from "./Users";

export default function Lab6() {
  return (
    <div id="wd-lab6">
      <h2>Lab 6</h2>
      <p className="text-sm text-neutral-600">
        These demos talk to the sibling <code>webdev-server</code> project,
        which now reads and writes MongoDB through Mongoose. They need Express
        running and <code>DATABASE_CONNECTION_STRING</code> pointing at a
        database that is actually up — locally that is{" "}
        <code>mongodb://127.0.0.1:27017/kambaz</code>. The Users demo calls the
        ADMIN-only <code>/api/users</code> routes, so sign in first.
      </p>
      <hr className="my-3" />
      <ConnectionStatus />
      <Lab6Todos />
      <Lab6Users />
    </div>
  );
}
