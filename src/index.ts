import express from 'express';
import connectDB from './config/database.js';
import routes from './routes.js';
import * as dotenv from 'dotenv';
import configExpress from './config/express.js';
import logger from './logger/index.js';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

dotenv.config();

const typeDefs = `#graphql
  # This "Roster" types define the queryable fields for every roster owned in your data base.
  type Roster {
    title: String
    createdBy: String
    guests: String
    values: String
  }

  type Value {
    value: String
    createdBy: String
    createdAt: String
  }

  # The "Query" type is special: it lists all of the available queries that.
  type Query {
    rosters: [Roster]
    values: [Value]
  }
`

const roster = [
  {
    title: 'tests Apollo graphQl',
    createdBy: 'cp',
    guests: 'you',
    values: [
      {
        value: 123,
      }
    ],
  }
];

const resolvers = {
  Query: {
    rosters: () => roster,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

const app = express();
const PORT = process.env.PORT || 8080;

// Setup express
configExpress(app);

// Connect to MongoDB
connectDB();

// Setup Routs
routes(app);

app.listen(PORT, () => {
  logger.info('Server is runing on port 8080');
});
