import { UserDocument } from '../api/user/user.model';
import { getUser } from '../api/user/user.services';
import { verifyToken } from '../auth/auth.service';
import logger from '../logger';

async function context( req: any ) {
  let token = null;
  let currentUser = null;

  if (req.headers?.authorization) {
    token = req.headers.authorization.split(' ')[1];
  }

  try {
    if (token) {
      const payload = await verifyToken(token) as UserDocument;
      const user = await getUser({ email: payload.email });

      currentUser = user;
    }
  } catch (error) {
    console.log('error', error);
    logger.info('Error context ~ ApolloServer', error);
  } finally {
    return {
      currentUser
    };
  }

}

export default context;
