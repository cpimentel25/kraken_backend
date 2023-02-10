import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import logger from "../logger";
import typeDefs from "../graphql/typeDefs";
import resolvers from "../graphql/resolvers";
import { MyContext } from "..";
import { Server } from "http";

// import { readFileSync } from "fs";

async function graphQlConfig(httpServer: Server) {
  // const typeDefs = readFileSync('../src/graphql/schema.graphql', { encoding: 'utf-8' });
  try {
    const server = new ApolloServer<MyContext>({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();
    logger.info('GraphsQl Server ~ started');

    return server;

  } catch (error) {
    console.log(error)
    console.error('Error starting ~ GraphsQl Server', error)
    process.exit(1)
  }
}

export default graphQlConfig;
