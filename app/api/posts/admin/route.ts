import { NextRequest, NextResponse } from 'next/server';

import { createPost } from '@/service/api/postsService';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();

    if (!body) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    const createdResource = await createPost(body);

    return NextResponse.json(createdResource, { status: 201 });
  } catch (error) {
    console.error('Error creating resource:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export default function Default() {
  return Response.json("", {status: 405});
}
