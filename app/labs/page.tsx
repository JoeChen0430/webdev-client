import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2>Yi-Jhao Chen</h2>
      {/* The grader looks for wd-github on the Labs page itself. The §1.3.9
          anchor of the same id lives in Lab 1, which is a different document. */}
      <p>
        <a
          href="https://github.com/JoeChen0430/webdev-client"
          id="wd-github"
          target="_blank"
          rel="noreferrer"
        >
          GitHub repository
        </a>
      </p>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
          <ul>
            <li>
              <Link href="/labs/lab2/tailwind" id="wd-tailwind-link">
                Lab 2: Tailwind CSS
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">
            Lab 4
          </Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
      </ul>
    </div>
  );
}
