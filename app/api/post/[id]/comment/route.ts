import { NextResponse } from "next/server";
import connectToDB from "@/lib/mongodb";
import Post from "@/models/Post";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// POST /api/post/[id]/comment
export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ error: "Post id is required" }, { status: 400 });
    }

    const { content, authorName } = await req.json();
    if (!content || typeof content !== "string") {
      return NextResponse.json({ error: "Comment content is required" }, { status: 400 });
    }

    await connectToDB();

    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    post.comments.push({ authorName: authorName || "Anonymous", content });
    await post.save();

    const newComment = post.comments[post.comments.length - 1];
    return NextResponse.json(newComment, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
