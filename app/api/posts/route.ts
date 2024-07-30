import { NextResponse } from "next/server";

import { getAllPosts } from "@/service/api/postsService";

export async function GET(): Promise<NextResponse> {

  try {
    const posts = await getAllPosts();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}