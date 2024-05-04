import mongoose from "mongoose";
const URL = process.env.MONGO_URL;

async function connect() {
    const connectDB =  await mongoose.connect(URL);
    console.log("Database Connected")
    return connectDB;
};

export default connect;