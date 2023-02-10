import { Application } from 'express';
import { ApolloServer, BaseContext } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import user from './api/user/index';
import roster from './api/roster/index';
import value from './api/value/index';
import categorie from './api/categorie/index';
import authLocal from './auth/local/index';
import healthCheck from './api/healthCheck/index';
import cors from 'cors';
import bodyParser from 'body-parser';
import context from './graphql/context';

const options = {
  context,
}

function routes(
  app: Application,
  graphQlServer: ApolloServer<BaseContext>
  ) {
  app.use('/api/users', user); // -> User ->
  app.use('/api/roster', roster) // -> Roster ->
  app.use('/api/values', value); // -> Values ->
  app.use('/api/categorie', categorie); // -> Categories
  app.use('/api/healthCheck', healthCheck); // -> Health check server
  app.use('/auth/local', authLocal); // -> Auth route
  // GraphQl ->
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(
      graphQlServer,
      // { context: async ({ req }) => ({ token: req.headers.token }), }
      options
    ),
  );
};

export default routes;
