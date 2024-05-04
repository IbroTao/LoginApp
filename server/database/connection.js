import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURL = process.env.MONGO_URL;

export async function startServer() {
  try {
    await mongoose.connect(mongoURL);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
