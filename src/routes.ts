import { Application } from 'express';
import user from './api/user';
import value from './api/value';
import categorie from './api/categorie';
import authLocal from './auth/local';
import healthCheck from './api/healthCheck';

function routes(app: Application) {
  app.use('/api/users', user);
  app.use('/api/values', value);
  app.use('/api/categorie', categorie);
  // Health check server ->
  app.use('/api/healthCheck', healthCheck);
  // Auth route ->
  app.use('/auth/local', authLocal);
};

export default routes;
