import mongoose from "mongoose";
import logger from '../logger/index';

async function connectDB() {
  const uri = process.env.MONGO_DB_URI;

  if (!uri) {
    throw new Error('MONGO_DB_URI is not defined');
  }

  try {
    await mongoose.connect(uri);
    logger.info('Connected to database');
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

export default connectDB;
