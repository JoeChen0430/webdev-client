"use client";

import { useState } from "react";

// 5.2.2.1 — operands travel as segments of the path, e.g. /lab5/add/34/23.
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

const FIELD = "w-24 rounded border border-neutral-300 px-2 py-1 text-sm";
const LINK =
  "inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");

  return (
    <div id="wd-path-parameters" className="mb-6">
      <h4 className="text-lg font-semibold">Path Parameters</h4>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <input
          id="wd-path-parameter-a"
          className={FIELD}
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          id="wd-path-parameter-b"
          className={FIELD}
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <a
          id="wd-path-parameter-add"
          className={LINK}
          href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}
        >
          Add {a} + {b}
        </a>
        <a
          id="wd-path-parameter-subtract"
          className={LINK}
          href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
        >
          Subtract {a} - {b}
        </a>
        {/* 5.2.2.3 On your own: multiply and divide */}
        <a
          id="wd-path-parameter-multiply"
          className={LINK}
          href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}
        >
          Multiply {a} &times; {b}
        </a>
        <a
          id="wd-path-parameter-divide"
          className={LINK}
          href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}
        >
          Divide {a} &divide; {b}
        </a>
      </div>
    </div>
  );
}
