// 5.3 — a Route Handler: the file path is the URL. Exporting a function named
// GET is how the App Router maps the HTTP method. This is served by Next.js on
// port 3000, so it is NOT the Express /lab5/welcome on port 4000.
export async function GET() {
  return Response.json({ message: "Hello from Lab 5 API!" });
}
