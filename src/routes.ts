import { Application } from 'express';
import user from './api/user';
import roster from './api/roster';
import value from './api/value';
import categorie from './api/categorie';
import authLocal from './auth/local';
import healthCheck from './api/healthCheck';

function routes(app: Application) {
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
};

export default routes;
