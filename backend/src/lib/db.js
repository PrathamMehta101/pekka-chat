import mongoose from "mongoose";

export const connectDb = async () => {
  const res = await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
};
