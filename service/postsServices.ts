

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${process.env.BACKEND_URL}/api/posts/noticias/${slug}`, {
    method: 'GET',
  });

  const postData = res.json();
  const [post] = await Promise.all([postData])

  return post;
}

async function getAllPosts() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/posts`, {
    method: 'GET',
  });

  const postsData = res.json();
  const [posts] = await Promise.all([postsData])

  return posts;
}