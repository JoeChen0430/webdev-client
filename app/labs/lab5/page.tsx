import "@/app/labs/lab2/tailwind/utilities.css";
import Environment from "./Environment";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithRemoteObjects from "./WorkingWithRemoteObjects";
import WorkingWithRemoteArrays from "./WorkingWithRemoteArrays";
import HttpClient from "./HttpClient";
import WorkingWithRemoteObjectsAsync from "./WorkingWithRemoteObjectsAsync";
import WorkingWithRemoteArraysAsync from "./WorkingWithRemoteArraysAsync";
import HelloRoute from "./HelloRoute";
import CalculatorNextWebApiClient from "./Calculator";

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <p className="text-sm text-neutral-600">
        The Express demos need the sibling <code>webdev-server</code> project
        running on port 4000. The two Route Handler demos at the bottom are
        served by this app and need nothing else.
      </p>
      <hr className="my-3" />
      <Environment />
      <PathParameters />
      <QueryParameters />
      <WorkingWithRemoteObjects />
      <WorkingWithRemoteArrays />
      <HttpClient />
      <WorkingWithRemoteObjectsAsync />
      <WorkingWithRemoteArraysAsync />
      <hr className="my-3" />
      <h3 className="text-xl font-semibold">Next.js Route Handlers</h3>
      <HelloRoute />
      <CalculatorNextWebApiClient />
    </div>
  );
}
