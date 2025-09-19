import mongoose, { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: String, required: true },
    authorName: { type: String, required: true },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

const Post = models.Post || model("Post", PostSchema);
export default Post;
