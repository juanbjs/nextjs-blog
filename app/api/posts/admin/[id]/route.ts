import { NextRequest, NextResponse } from 'next/server';

import { getPostById, updatePost, deletePost } from '@/service/api/postsService';

interface Params {
  id: string;
}

export async function GET(req: NextRequest, context: { params: Params }): Promise<NextResponse> {
  const { id } = context.params;

  try {
    const posts = await getPostById(id);
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, context: { params: Params }): Promise<NextResponse> {

  const { id } = context.params;

  try {
    const body = await req.json();

    if (!body) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    const updatedResource = await updatePost(body, id);

    return NextResponse.json(updatedResource, { status: 200 });
  } catch (error) {
    console.error('Error creating resource:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, context: { params: Params }): Promise<NextResponse> {

  const { id } = context.params;

  try {
    const body = await req.json();

    if (!body) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    const deletedResource = await deletePost(id);

    return NextResponse.json(deletedResource, { status: 200 });
  } catch (error) {
    console.error('Error creating resource:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
