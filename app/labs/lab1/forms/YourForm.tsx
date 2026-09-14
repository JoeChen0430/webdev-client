"use client";

export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>Name and login</h5>
      <label htmlFor="wd-your-first-name">First name: </label>
      <input
        type="text"
        defaultValue="Yi Jhao"
        placeholder="First name"
        id="wd-your-first-name"
      />
      <br />
      <label htmlFor="wd-your-last-name">Last name: </label>
      <input
        type="text"
        defaultValue="Chen"
        placeholder="Last name"
        id="wd-your-last-name"
      />
      <br />
      <label htmlFor="wd-your-student-id">Student ID: </label>
      <input
        type="password"
        defaultValue="001234567"
        title="Your NUID"
        id="wd-your-student-id"
      />
      <br />

      <h5>Why I am taking this course</h5>
      <label htmlFor="wd-your-bio">Short bio: </label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={5}
        defaultValue="I grew up in Taiwan and I am studying computer science at Northeastern. I am taking this course to get comfortable building full stack web applications, from HTML and CSS through React and Node, so I can ship side projects on my own."
      />
      <br />

      <h5>Class standing</h5>
      <input
        type="radio"
        name="your-standing"
        id="wd-your-standing-freshman"
      />
      <label htmlFor="wd-your-standing-freshman">Freshman</label>
      <br />
      <input
        type="radio"
        name="your-standing"
        id="wd-your-standing-sophomore"
      />
      <label htmlFor="wd-your-standing-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-standing-junior" />
      <label htmlFor="wd-your-standing-junior">Junior</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-standing-senior" />
      <label htmlFor="wd-your-standing-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="your-standing"
        id="wd-your-standing-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-standing-graduate">Graduate</label>
      <br />

      <h5>Enrollment</h5>
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-enrollment-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-enrollment-full-time">Full-time</label>
      <br />
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-enrollment-part-time"
      />
      <label htmlFor="wd-your-enrollment-part-time">Part-time</label>
      <br />

      <h5>Interests</h5>
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-frontend"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-frontend">Front-end development</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-backend"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-backend">Back-end and APIs</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-databases"
      />
      <label htmlFor="wd-your-interest-databases">Databases</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-machine-learning"
      />
      <label htmlFor="wd-your-interest-machine-learning">
        Machine learning
      </label>
      <br />

      <h5>Program</h5>
      <label htmlFor="wd-your-major">Major: </label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="CE">Computer Engineering</option>
        <option value="IS">Information Systems</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics I want to go deeper on: </label>
      <br />
      <select multiple id="wd-your-topics" defaultValue={["REACT", "NODE"]}>
        <option value="HTML">HTML and accessibility</option>
        <option value="CSS">CSS and layout</option>
        <option value="REACT">React and state management</option>
        <option value="NODE">Node and Express</option>
        <option value="MONGO">MongoDB</option>
      </select>
      <br />

      <h5>Details</h5>
      <label htmlFor="wd-your-email">School email: </label>
      <input
        type="email"
        defaultValue="chen.yijh@northeastern.edu"
        placeholder="you@northeastern.edu"
        id="wd-your-email"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
      <input
        type="number"
        defaultValue="2028"
        min={2026}
        max={2032}
        id="wd-your-grad-year"
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date: </label>
      <input
        type="date"
        defaultValue="2026-09-09"
        min="2000-01-01"
        max="2030-12-31"
        id="wd-your-start-date"
      />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited I am about this course (0&ndash;10):{" "}
      </label>
      <input
        type="range"
        defaultValue="9"
        min="0"
        max="10"
        id="wd-your-excitement"
      />
      <br />

      <button id="wd-your-button-save" type="submit">
        Save
      </button>
      <button id="wd-your-button-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
