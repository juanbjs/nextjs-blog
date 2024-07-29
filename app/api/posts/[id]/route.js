import database  from '@/helper/server/database';
import { ObjectId } from 'mongodb';


export async function GET(req, { params }) {

  console.log("params", params);

  try {
    const id = ObjectId.createFromHexString(params.id);
    const db = await database();
    const posts = await db
                          .collection('posts')
                          .findOne({"_id": id});
    return Response.json(posts);
  } catch (e) {
      console.error(e);
      return Response.json({error: e});
  }
}
