import express from 'express';
import connectDB from './config/database';
import routes from './routes';
import * as dotenv from 'dotenv';
import configExpress from './config/express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Setup express
configExpress(app);

// Connect to MongoDB
connectDB();

// Setup Routs
routes(app);

app.listen(PORT, () => {
  console.log('Server is runing on port 8080');
});
