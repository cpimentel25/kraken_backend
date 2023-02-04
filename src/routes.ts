import { Application } from 'express';
import user from './api/user/index';
import roster from './api/roster/index';
import value from './api/value/index';
import categorie from './api/categorie/index';
import authLocal from './auth/local/index';
import healthCheck from './api/healthCheck/index';
import { ApolloServer, BaseContext } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import bodyParser from 'body-parser';

import context from './graphql/context';

// import user from './api/user';
// import roster from './api/roster';
// import value from './api/value';
// import categorie from './api/categorie';
// import authLocal from './auth/local';
// import healthCheck from './api/healthCheck';

const options = {
  context,
}

function routes(app: Application, graphQlServer: ApolloServer<BaseContext>) {
  // User ->
  app.use('/api/users', user);
  // Roster ->
  app.use('/api/roster', roster)
  // Values ->
  app.use('/api/values', value);
  // Categories ->
  app.use('/api/categorie', categorie);
  // Health check server ->
  app.use('/api/healthCheck', healthCheck);
  // Auth route ->
  app.use('/auth/local', authLocal);
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
