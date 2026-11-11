// 5.2.1 — the server origin is never a literal in the source. One variable
// points at localhost:4000 locally and at the Render origin on Vercel.
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function Environment() {
  return (
    <div id="wd-lab5-environment" className="mb-6">
      <h4 className="text-lg font-semibold">Environment</h4>
      <p>
        <code>NEXT_PUBLIC_HTTP_SERVER</code> = <code>{HTTP_SERVER}</code>
      </p>
      <a
        id="wd-welcome-link"
        className="text-blue-700 underline"
        href={`${HTTP_SERVER}/lab5/welcome`}
      >
        Welcome
      </a>
    </div>
  );
}
