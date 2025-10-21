"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface IComment {
  _id: string;
  authorName: string;
  content: string;
  createdAt: string;
}

interface IPost {
  _id: string;
  title: string;
  content: string;
  authorName: string;
  image?: string;
  createdAt: string;
  comments?: IComment[];
}

export default function HomePage() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post", { cache: "no-store" });
        if (!res.ok) throw new Error(await res.text() || "Failed to fetch posts");
        const data: IPost[] = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const deletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const res = await fetch(`/api/post/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete post");
      setPosts((prev) => prev.filter((post) => post._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete post");
    }
  };

  const addComment = async (postId: string, content: string) => {
    try {
      const res = await fetch(`/api/post/${postId}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, authorName: "Anonymous" }),
      });
      if (!res.ok) throw new Error("Failed to add comment");
      const newComment: IComment = await res.json();
      setPosts((prev) =>
        prev.map((p) =>
          p._id === postId ? { ...p, comments: [...(p.comments || []), newComment] } : p
        )
      );
    } catch (err) {
      console.error(err);
      alert("Failed to add comment");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading posts...</p>;

  return (
    <div className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Latest Blog Posts</h1>

      {posts.length === 0 && <p className="text-center text-gray-500">No posts yet.</p>}

      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="p-4 border rounded shadow hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-bold">{post.title}</h2>
              <button
                onClick={() => deletePost(post._id)}
                className="text-red-600 font-semibold"
              >
                Delete
              </button>
            </div>

            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={675}
                className="w-full h-auto object-cover rounded mt-2"
              />
            )}

            <p className="text-gray-700 mt-2">{post.content.slice(0, 200)}...</p>

            <div className="mt-2 text-sm text-gray-500">
              By <span className="font-semibold">{post.authorName}</span> |{" "}
              {new Date(post.createdAt).toLocaleDateString(undefined, {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>

            <Link href={`/posts/${post._id}`} className="text-blue-600 mt-2 inline-block">
              Read More
            </Link>

            {/* Comments Section */}
            <div className="mt-4 border-t pt-2">
              <h3 className="font-semibold mb-2">Comments</h3>
              {post.comments?.length ? (
                post.comments.map((c) => (
                  <div key={c._id} className="text-gray-700 mb-1">
                    <span className="font-semibold">{c.authorName}: </span>
                    {c.content}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No comments yet.</p>
              )}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const input = form.elements.namedItem("comment") as HTMLInputElement;
                  addComment(post._id, input.value);
                  input.value = "";
                }}
                className="mt-2 flex gap-2"
              >
                <input
                  type="text"
                  name="comment"
                  placeholder="Add a comment..."
                  className="border rounded px-2 py-1 flex-1"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Comment
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
