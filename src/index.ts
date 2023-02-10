import express from 'express';
import connectDB from './config/database';
import * as dotenv from 'dotenv';
import configExpress from './config/express';
import graphQlConfig from './config/graphql';
import http from 'http';
import routes from './routes';
import logger from './logger/index';

export interface MyContext {
  token?: string;
};

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

export const httpServer = new http.Server(app);

async function main() {
  await connectDB(); // -> Connect to MongoDB
  await configExpress(app); // -> Setup express
  const graphQlServer = await graphQlConfig(httpServer); // -> graphQl Server (config)
  await routes(app, graphQlServer); // -> Setup Routs
}

app.listen(PORT, () => {
  logger.info('~ Server is runing ~ on port 8080');
});

main();
