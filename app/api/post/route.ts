import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import connectToDB from "@/lib/mongodb";
import Post from "@/models/Post";

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: Request) {
  try {
    await connectToDB();

    const formData = await req.formData();
    const title = formData.get("title")?.toString();
    const content = formData.get("content")?.toString();
    const authorId = formData.get("authorId")?.toString();
    const authorName = formData.get("authorName")?.toString();
    const imageFile = formData.get("image") as File | null;

    // Validate
    if (!title || !content || !authorId || !authorName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    let imageUrl = "";

    if (imageFile) {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadRes = await new Promise<any>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "blog_uploads" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(buffer);
      });

      imageUrl = uploadRes.secure_url;
    }

    const newPost = await Post.create({
      title,
      content,
      authorId,
      authorName,
      imageUrl,
    });

    return NextResponse.json({ message: "Post created successfully", post: newPost }, { status: 201 });

  } catch (err) {
    console.error("Error creating post:", err);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
