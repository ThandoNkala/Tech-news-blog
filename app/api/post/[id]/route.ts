import { NextResponse } from "next/server";
import connectToDB from "@/lib/mongodb";
import Post from "@/models/Post";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// DELETE /api/post/[id]
export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ error: "Post id is required" }, { status: 400 });
    }

    await connectToDB();

    const deleted = await Post.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Post deleted" }, { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
