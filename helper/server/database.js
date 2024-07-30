import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

async function database() {
  client.connect();
  return client.db('blog');
}

export default database;