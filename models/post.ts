import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IComment extends Document {
  authorName: string;
  content: string;
}

export interface IPost extends Document {
  title: string;
  content: string;
  image?: string;
  authorName: string;
  authorId: string;
  comments: IComment[];
}

const CommentSchema = new Schema<IComment>(
  {
    authorName: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, default: null },
    authorName: { type: String, required: true },
    authorId: { type: String, required: true },
    comments: [CommentSchema],
  },
  { timestamps: true }
);

// ✅ Prevent OverwriteModelError in serverless/hot reloads
const Post = models.Post || model<IPost>("Post", PostSchema);

export default Post;
