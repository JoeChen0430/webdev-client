"use client";

import { useState } from "react";

// 5.2.2.2 — the same four operations, but the operands and the operation
// itself ride in the query string: /lab5/calculator?operation=add&a=34&b=23
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const CALCULATOR_API = `${HTTP_SERVER}/lab5/calculator`;

const FIELD = "w-24 rounded border border-neutral-300 px-2 py-1 text-sm";
const LINK =
  "inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");

  return (
    <div id="wd-query-parameters" className="mb-6">
      <h4 className="text-lg font-semibold">Query Parameters</h4>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <input
          id="wd-query-parameter-a"
          className={FIELD}
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          id="wd-query-parameter-b"
          className={FIELD}
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <a
          id="wd-query-parameter-add"
          className={LINK}
          href={`${CALCULATOR_API}?operation=add&a=${a}&b=${b}`}
        >
          Add {a} + {b}
        </a>
        <a
          id="wd-query-parameter-subtract"
          className={LINK}
          href={`${CALCULATOR_API}?operation=subtract&a=${a}&b=${b}`}
        >
          Subtract {a} - {b}
        </a>
        {/* 5.2.2.3 On your own: multiply and divide */}
        <a
          id="wd-query-parameter-multiply"
          className={LINK}
          href={`${CALCULATOR_API}?operation=multiply&a=${a}&b=${b}`}
        >
          Multiply {a} &times; {b}
        </a>
        <a
          id="wd-query-parameter-divide"
          className={LINK}
          href={`${CALCULATOR_API}?operation=divide&a=${a}&b=${b}`}
        >
          Divide {a} &divide; {b}
        </a>
      </div>
    </div>
  );
}
