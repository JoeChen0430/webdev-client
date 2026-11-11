"use client";

import { useState } from "react";

// 5.3.1 — client for the same-app calculator Route Handler. The request stays
// on /api/lab5/..., so this demo works with only `npm run dev`.
const FIELD = "w-24 rounded border border-neutral-300 px-2 py-1 text-sm";

const SYMBOLS: Record<string, string> = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
};

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [output, setOutput] = useState("");

  const calculate = async (op = operation) => {
    const response = await fetch(
      `/api/lab5/calculator?a=${a}&b=${b}&operation=${op}`,
    );
    const data = await response.json();
    if (!response.ok) {
      setOutput(data.error);
      return;
    }
    setOutput(`${data.a} ${SYMBOLS[data.operation]} ${data.b} = ${data.result}`);
  };

  return (
    <div id="wd-calculator" className="mb-6">
      <h4 className="text-lg font-semibold">Calculator (Next.js Web API)</h4>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <label htmlFor="wd-calculator-a" className="text-sm">
          A:
        </label>
        <input
          id="wd-calculator-a"
          className={FIELD}
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <label htmlFor="wd-calculator-b" className="text-sm">
          B:
        </label>
        <input
          id="wd-calculator-b"
          className={FIELD}
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
        <label htmlFor="wd-calculator-operation" className="text-sm">
          Operation:
        </label>
        <select
          id="wd-calculator-operation"
          className={FIELD}
          value={operation}
          onChange={(e) => {
            setOperation(e.target.value);
            // Switching the operation recalculates right away, so the dropdown
            // reads as the answer changing rather than going stale.
            void calculate(e.target.value);
          }}
        >
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">&times;</option>
          <option value="divide">&divide;</option>
        </select>
        <button
          type="button"
          id="wd-calculator-click"
          onClick={() => calculate()}
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        >
          Calculate
        </button>
      </div>
      <input
        id="wd-calculator-output"
        readOnly
        value={output}
        className="w-full max-w-md rounded border border-neutral-300 bg-neutral-50 px-2 py-1 text-sm"
      />
    </div>
  );
}
