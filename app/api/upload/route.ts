import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import connectToDB from "@/lib/mongodb"; 
import Post from "@/models/Post";
import type { UploadApiResponse } from "cloudinary";

// Cloudinary con fig
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

// POST /api/upload
export async function POST(req: Request) {
  try {
    await connectToDB();

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const authorId = formData.get("authorId") as string;
    const authorName = formData.get("authorName") as string;
    const file = formData.get("image") as File | null;

    if (!title || !content || !authorId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    let imageUrl = "";
    if (file) {
      // Convert File -> Buffer -> Base64 string for Cloudinary
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "blog_uploads" }, (error, result) => {
            if (error) reject(error as Error);
            else resolve(result as UploadApiResponse);
          })
          .end(buffer);
      });

      imageUrl = uploadResult.secure_url;
    }

    // Save post in MongoDB
    const newPost = await Post.create({
      title,
      content,
      authorId,
      authorName,
      imageUrl,
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error: unknown) {
    console.error("Upload error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: "Upload failed", details: message }, { status: 500 });
  }
}
