import database  from '@/helper/server/database';

export async function GET() {
  const db = await database();
  const posts = await db.collection('posts').find().toArray();
  return Response.json(posts);
}
