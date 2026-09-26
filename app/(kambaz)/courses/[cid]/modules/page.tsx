import "@/app/labs/lab2/tailwind/utilities.css";
import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          Collapse All
        </button>
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          View Progress
        </button>
        <select
          defaultValue="publish-all"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          <option value="publish-all">Publish All</option>
        </select>
        <button
          type="button"
          className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          + Module
        </button>
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Introduction to the course</li>
            <li className="wd-content-item">Learn what is Web Development</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Creating User Interfaces
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to Web Development</li>
            <li className="wd-content-item">
              Creating an HTTP server with Node.js
            </li>
            <li className="wd-content-item">Creating a React Application</li>
          </Lesson>
        </Module>
        <Module title="Week 2, Lecture 2 - Formatting User Interfaces with HTML">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Learn how to create user interfaces with HTML
            </li>
            <li className="wd-content-item">
              Learn how to format HTML content with headings and lists
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to HTML</li>
            <li className="wd-content-item">Formatting Web content with HTML</li>
          </Lesson>
        </Module>
        <Module title="Week 3, Lecture 3 - Styling User Interfaces with CSS">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">CSS Styling</li>
            <li className="wd-content-item">
              Learn how to style content with colors, fonts, and layouts
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to CSS</li>
            <li className="wd-content-item">CSS Selectors and the box model</li>
          </Lesson>
        </Module>
        {/* On your own: my own module */}
        <Module title="Week 4, Lecture 4 - Tailwind and Responsive Layouts">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Compose layouts from Tailwind utility classes
            </li>
            <li className="wd-content-item">
              Use breakpoint prefixes to hide and show sidebars
            </li>
          </Lesson>
          <Lesson title="MY NOTES">
            <li className="wd-content-item">
              Rebuild the Kambaz sidebars with flex instead of tables
            </li>
          </Lesson>
        </Module>
        {/* With AI: sample module */}
        <Module title="Sample module (AI)">
          <Lesson title="Sample lesson (AI)">
            <li className="wd-content-item">
              A sample content item generated to show the styling.
            </li>
          </Lesson>
        </Module>
      </ul>
    </div>
  );
}
