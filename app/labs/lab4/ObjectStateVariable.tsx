"use client";

import { useState } from "react";

const FIELD =
  "mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5";

export default function ObjectStateVariable() {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    // On your own: my own property
    country: "Taiwan",
    // With AI: sample property
    city: "Boston",
  });
  return (
    <div id="wd-object-state-variables">
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <input
        className={FIELD}
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
        id="wd-person-name"
      />
      <input
        type="number"
        className={FIELD}
        value={person.age}
        onChange={(e) =>
          setPerson({ ...person, age: parseInt(e.target.value) || 0 })
        }
        id="wd-person-age"
      />
      <input
        className={FIELD}
        value={person.country}
        onChange={(e) => setPerson({ ...person, country: e.target.value })}
        id="wd-person-country"
      />
      <input
        className={FIELD}
        value={person.city}
        onChange={(e) => setPerson({ ...person, city: e.target.value })}
        id="wd-person-city"
      />
      <hr />
    </div>
  );
}
