import { NextRequest, NextResponse } from "next/server";

import { getPostBySlug } from "@/service/api/postsService";

interface Params {
  category: string;
  slug: string;
}

export async function GET(req: NextRequest, context: { params: Params }): Promise<NextResponse> {
  const { slug } = context.params;

  try {
    const posts = await getPostBySlug(slug);
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
