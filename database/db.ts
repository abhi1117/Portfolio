import mongoose from "mongoose";

let isConnected = false; // Track connection status

export const connectToDb = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    // Ensure MONGODB_URI is provided
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error(
        "MongoDB connection string is missing in environment variables."
      );
    }

    // Connect to MongoDB with recommended options
    await mongoose.connect(mongoUri, {
      connectTimeoutMS: 30000, // Adjust this if necessary
      serverSelectionTimeoutMS: 5000, // Fails fast if server is unreachable
    });

    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

export const disconnectFromDb = async () => {
  if (!isConnected) {
    console.log("MongoDB is already disconnected");
    return;
  }

  try {
    await mongoose.disconnect();
    isConnected = false;
    console.log("MongoDB disconnected successfully");
  } catch (error) {
    console.error("Error disconnecting from MongoDB", error);
  }
};
