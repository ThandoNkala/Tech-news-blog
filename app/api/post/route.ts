import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import connectToDB from "@/lib/mongodb";
import Post from "@/models/Post";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// ✅ Cloudinary setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ GET — fetch posts
export async function GET() {   
  try {
    await connectToDB();
    const posts = await Post.find().sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (err: any) {
    console.error("❌ Error fetching posts:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// ✅ POST — create post
export async function POST(req: Request) {
  try {
    await connectToDB();

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const file = formData.get("file") as File | null;
    const authorName = formData.get("authorName") as string | null;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    let imageUrl: string | null = null;

    if (file) {
      console.log(" Received file:", file.name, file.type, file.size);

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadRes = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "blog_uploads",
            resource_type: "auto", // handles images, png, jpg, webp, etc.
          },
          (error, result) => {
            if (error) {
              console.error("❌ Cloudinary upload error:", error);
              reject(error);
            } else {
              console.log(" Cloudinary upload success:", result?.secure_url);
              resolve(result);
            }
          }
        );
        stream.end(buffer);
      });

      imageUrl = (uploadRes as any).secure_url || null;
    } else {
      console.log("No file uploaded for this post");
    }

    // ✅ Log the final image URL before saving
    console.log("Final imageUrl:", imageUrl);

    const newPost = new Post({
      title,
      content,
      image: imageUrl,
      authorName: authorName || null,
    });

    await newPost.save();
    console.log(" Post saved:", newPost._id);

    return NextResponse.json(
      { message: "Post created successfully", post: newPost },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("❌ Error creating post:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
