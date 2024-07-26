import database  from '@/helper/server/database';

export async function GET() {
  const db = await database();
  const posts = await db.collection('posts').find().toArray();
  return Response.json(posts);
}

export async function POST(req, res) {
  console.log("POST");
  console.log(req);
  console.log(req.body);
  console.log(req.body);
  const body = await req.json();
  console.log(body);

  return Response.json({ message: "Post created" });
}