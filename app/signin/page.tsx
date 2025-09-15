"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const handleGoogleSignIn = () => signIn("google");
  const handleGithubSignIn = () => signIn("github");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign in to your account
        </h2>

        {/* Social Sign-in Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-2 w-1/2 bg-red-500 text-white rounded-xl py-2 font-semibold shadow-md hover:bg-red-600 transition"
          >
            Google
          </button>

          <button
            onClick={handleGithubSignIn}
            className="flex items-center justify-center gap-2 w-1/2 bg-gray-900 text-white rounded-xl py-2 font-semibold shadow-md hover:bg-gray-800 transition"
          >
            GitHub
          </button>
        </div>

        {/* Manual sign-in form (optional) */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white rounded-xl py-2 font-semibold shadow-md hover:bg-indigo-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
