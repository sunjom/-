import mongoose from 'mongoose';

const uri = process.env.MONGO;

if(!uri){
    throw new Error('Missing environment variable: MONGO');
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
    if (cached.conn) return cached.conn;
  
    //첫 연결 시도시
    if (!cached.promise) {
      cached.promise = mongoose.connect(uri, {
        bufferCommands: false,
      });
    }
  
    cached.conn = await cached.promise;
    (global as any).mongoose = cached;
    return cached.conn;
  }
