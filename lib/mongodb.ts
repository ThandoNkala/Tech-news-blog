import mongoose from "mongoose";

declare global {
  var mongooseCache:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

const cached = globalThis.mongooseCache ?? (globalThis.mongooseCache = { conn: null, promise: null });

export default async function connectToDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: "tech-news",
    };
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("⚠️ Please define the MONGODB_URI environment variable inside .env.local");
    }
    cached.promise = mongoose.connect(uri, opts).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  globalThis.mongooseCache = cached;
  return cached.conn;
}
