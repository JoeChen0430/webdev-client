"use client";

const hello = () => {
  alert("Hello World!");
};

// On your own: a greeting with my name
const greetMe = () => {
  alert("Hello, Yi-Jhao Chen!");
};

// With AI: sample goodbye handler
const goodbye = () => {
  alert("Goodbye World!");
};

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="me-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      <button
        type="button"
        onClick={greetMe}
        id="wd-onclick-my-greeting"
        className="me-2 rounded bg-purple-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Greet Me
      </button>
      <button
        type="button"
        onClick={goodbye}
        id="wd-onclick-goodbye"
        className="rounded bg-neutral-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Goodbye
      </button>
      <hr />
    </div>
  );
}
