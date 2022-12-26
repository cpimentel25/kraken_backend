import { Application } from 'express';
import user from './api/user';
import value from './api/value';
import authLocal from './auth/local';
import healthCheck from './api/healthCheck';

function routes(app: Application) {
  app.use('/api/users', user);
  app.use('/api/values', value);
  app.use('/api/healthCheck', healthCheck);
  // AUTH route
  app.use('/auth/local', authLocal);
};

export default routes;
