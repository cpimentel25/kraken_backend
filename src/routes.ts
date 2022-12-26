import { Application } from 'express';
import user from './api/user';
import value from './api/value';
import authLocal from './auth/local';

function routes(app: Application) {
  app.use('/api/users', user);
  app.use('/api/values', value);
  // AUTH route
  app.use('/auth/local', authLocal);
};

export default routes;
