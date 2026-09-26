import "@/app/labs/lab2/tailwind/utilities.css";
import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-3xl font-semibold">
        Dashboard
      </h1>
      <hr />
      <h2 id="wd-dashboard-published" className="my-3 text-xl font-semibold">
        Published Courses (4)
      </h2>
      <hr className="mb-4" />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {/* On your own: my own course card */}
        <CourseCard
          id="4550"
          title="CS4550 Web Development"
          subtitle="Building full stack web applications with HTML, CSS, React, Node, and MongoDB. The course I am taking this term."
          image="/images/reactjs.png"
        />
        <CourseCard
          id="1234"
          title="CS1234 React JS"
          subtitle="Full Stack software developer"
          image="/images/reactjs.png"
        />
        <CourseCard
          id="2345"
          title="CS2345 Node JS"
          subtitle="Server side JavaScript"
          image="/images/nodejs.png"
        />
        <CourseCard
          id="3456"
          title="CS3456 MongoDB"
          subtitle="NoSQL Databases"
          image="/images/mongodb.png"
        />
        {/* With AI: sample fourth card */}
        <CourseCard
          id="CS9999"
          title="CS9999 Sample Course"
          subtitle="Assistant-generated sample — not my course"
          image="/images/reactjs.png"
        />
      </div>
    </div>
  );
}
