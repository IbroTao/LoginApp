import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURL = process.env.MONGO_URL;

export async function startServer() {
  try {
    mongoose.set('strictQuery', true)
    await mongoose.connect(mongoURL);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
