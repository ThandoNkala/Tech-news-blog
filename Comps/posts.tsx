"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface IPost {
  _id: string;
  title: string;
  content: string;
  authorName: string;
  image?: string;
  createdAt: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post"); // Adjust endpoint if needed

        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || "Failed to fetch posts");
        }

        const data: IPost[] = await res.json();
        setPosts(data);
      } catch (err: unknown) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading posts...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Blog Posts</h1>

      {posts.length === 0 && <p className="text-center text-gray-500">No posts yet.</p>}

      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="p-4 border rounded shadow hover:shadow-md transition"
          >
            <h2 className="text-2xl font-bold">{post.title}</h2>
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-150 object-cover rounded mt-2"
              />
            )}
            <p className="text-gray-700 mt-2">{post.content.slice(0, 200)}...</p>
            <div className="mt-2 text-sm text-gray-500">
              By <span className="font-semibold">{post.authorName}</span> |{" "}
              {new Date(post.createdAt).toLocaleString()}
            </div>
            <Link href={`/posts/${post._id}`} className="text-blue-600 mt-2 inline-block">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
