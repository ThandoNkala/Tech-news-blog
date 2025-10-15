import mongoose, { Schema, model, models } from "mongoose";

const CommentSchema = new Schema(
  {
    authorName: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, default: null },
    authorName: { type: String, required: true },
    authorId: { type: String, required: true },
    comments: [CommentSchema], // ✅ add comments
  },
  { timestamps: true }
);

const Post = models.Post || model("Post", PostSchema);
export default Post;
