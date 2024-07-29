import database  from '@/helper/server/database';


export async function GET(req, { params }) {

  try {
    const db = await database();
    const posts = await db
                          .collection('posts')
                          .find({url: params.url})
                          .toArray();
    return Response.json(posts);
  } catch (e) {
      console.error(e);
      return Response.json({error: e});
  }
}
