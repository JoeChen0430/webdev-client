"use client";

export default function PassingFunctions({
  theFunction,
  theNameFunction,
  theOtherFunction,
}: {
  theFunction: () => void;
  theNameFunction: () => void;
  theOtherFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={theFunction}
        id="wd-pass-functions-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      {/* On your own: a second function from the parent that alerts my name */}
      <button
        type="button"
        onClick={theNameFunction}
        id="wd-pass-functions-name-click"
        className="me-2 rounded bg-purple-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke My Name Function
      </button>
      {/* With AI: sample extra function prop */}
      <button
        type="button"
        onClick={theOtherFunction}
        id="wd-pass-functions-other-click"
        className="rounded bg-neutral-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Other Function
      </button>
      <hr />
    </div>
  );
}
