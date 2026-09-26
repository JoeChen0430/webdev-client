/* eslint-disable @next/next/no-img-element */

export default function TailwindResponsiveDesign() {
  return (
    <div>
      {/* On your own: personal copy, plus lg:p-12 so the text column's padding
          clearly changes again at the lg breakpoint */}
      <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/images/reactjs.png"
              alt="ReactJS logo"
            />
          </div>
          <div className="p-8 lg:p-12">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Fall 2026
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
            >
              Why I am taking Web Development
            </a>
            <p className="mt-2 text-gray-500">
              I grew up in Taiwan and I am studying computer science at
              Northeastern. I want to be able to build and ship a full stack
              app end to end without copying from a tutorial.
            </p>
          </div>
        </div>
      </div>

      {/* With AI: sample card with an extra breakpoint utility */}
      <div
        id="wd-ai-responsive"
        className="mx-auto mt-6 max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl md:bg-indigo-50"
      >
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/images/reactjs.png"
              alt="ReactJS logo"
            />
          </div>
          <div className="p-8 lg:p-12">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Professional Courses
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
            >
              Rocket Propulsion Fundamentals
            </a>
            <p className="mt-2 text-gray-500">
              An in-depth study of the fundamentals of rocket propulsion,
              covering propulsion theory, engine types, and fuel chemistry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
