import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import logger from "../logger";
import typeDefs from "../graphql/typeDefs";
import resolvers from "../graphql/resolvers";
import { MyContext } from "..";

// import { readFileSync } from "fs";

async function graphQlConfig(httpServer: any) {
  // const typeDefs = readFileSync('../src/graphql/schema.graphql', { encoding: 'utf-8' });
  try {
    const server = new ApolloServer<MyContext>({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();
    logger.info('GraphsQl Server ~ started');

    // Modified server startup
    // await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
    // console.log(`🚀 Server ready at http://localhost:4000/`);

    return server;

  } catch (error) {
    logger.error('Error starting ~ GraphsQl Server', error)
    process.exit(1)
  }
}

export default graphQlConfig;
