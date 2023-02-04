import express from 'express';
import connectDB from './config/database';
import * as dotenv from 'dotenv';
import configExpress from './config/express';
import logger from './logger/index';
import graphQlConfig from './config/graphql';
import http from 'http';
import routes from './routes';

// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';
// import { readFileSync } from 'fs';
// import resolvers from './graphql/resolvers';

export interface MyContext {
  token?: string;
};

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

export const httpServer = new http.Server(app);
// export const httpServer = http.createServer(app);

async function main() {
  await connectDB(); // -> Connect to MongoDB
  await configExpress(app); // -> Setup express
  const graphQlServer = await graphQlConfig(httpServer); // -> graphQl server
  await routes(app, graphQlServer); // -> Setup Routs
}

app.listen(PORT, () => {
  logger.info('~ Server is runing ~ on port 8080');
});

// const typeDefs = readFileSync('../src/graphql/schema.graphql', { encoding: 'utf-8' });

// Launch the server (Apollo) ->
// const server = new ApolloServer<MyContext>({
//   typeDefs,
//   resolvers,
// });

// const graphQlServer = async () => {
//   const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 },
//   });

//   logger.info(`~ Apollo Server ready ~ at: ${url}`);
// };

main();
