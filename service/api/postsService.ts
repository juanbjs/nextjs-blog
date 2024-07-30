import { ObjectId } from 'mongodb';

import database  from '@/helper/server/database';
import Post from '@/model/posts';

export async function getAllPosts() {
  const db = await database();
  const posts = await db.collection<Post>('posts').find().toArray();

  return posts;
}

export async function getPostById(id: string) {
  const db = await database();
  const post = await db
                      .collection<Post>('posts')
                      .findOne({
                        _id: ObjectId.createFromHexString(id)
                      });

  return post;
}

export async function getPostBySlug(slug: string) {
  const db = await database();
  const post = await db
                      .collection<Post>('posts')
                      .findOne({
                        slug
                      });

  return post;
}

export async function getPostByCategoryAndSlug(category: string, slug: string) {
  const db = await database();
  const post = await db
                      .collection<Post>('posts')
                      .findOne({
                        category,
                        slug
                      });

  return post;
}

export async function createPost(post: Post) {
  const db = await database();

  post.slug = post.title.toLowerCase().replace(/ /g, "-");
  post.url = `${post.category}/${post.slug}`;

  const insertOne = await db.collection<Post>('posts').insertOne(post);

  return insertOne;
}

export async function updatePost(post: Post, id: string) {

  const _id = ObjectId.createFromHexString(id);
  const db = await database();

  post.slug = post.title.toLowerCase().replace(/ /g, "-");
  post.url = `${post.category}/${post.slug}`;

  const updateOne = await db
                            .collection<Post>('posts')
                            .updateOne({ _id }, { $set: post });

  return updateOne;
}

export async function deletePost(id: string) {

  const _id = ObjectId.createFromHexString(id);
  const db = await database();

  const deleteOne = await db
                            .collection<Post>('posts')
                            .deleteOne({ _id });

  return deleteOne;
}
