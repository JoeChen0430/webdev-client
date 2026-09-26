import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Lab 3 (ch. 3.2) teaches var vs let vs const by declaring all three, so the
  // sample code deliberately uses `var` and uses `let` for values it never
  // reassigns. Keep the book's code as written instead of "fixing" the lesson.
  {
    files: ["app/labs/lab3/**/*.{ts,tsx}"],
    rules: {
      "prefer-const": "off",
      "no-var": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
