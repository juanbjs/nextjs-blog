import database  from '@/helper/server/database';

export async function GET() {
  const db = await database();
  const posts = await db.collection('posts').find().toArray();
  return Response.json(posts);
}

export async function POST(req, res) {
  const body = await req.json();

  const db = await database();
  const insertOne = await db.collection('posts').insertOne(body);

  console.log(insertOne);

  res = Response.json(insertOne);

  return res;
}
