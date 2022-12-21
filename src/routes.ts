import user from './api/user';
import value from './api/value';

function routes(app) {
  app.use('/api/users', user);
  app.use('/api/values', value);
};

export default routes;
