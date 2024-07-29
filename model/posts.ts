import { ObjectId } from "mongodb";

export default interface Post {
  _id?: ObjectId;
  category: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  slug: string;
}