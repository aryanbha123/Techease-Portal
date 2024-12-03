export async function GET(req) {
  return new Response(JSON.stringify({ message: 'This is a GET request' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  const body = await req.json();
  return new Response(JSON.stringify({ message: 'POST request received', body }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
