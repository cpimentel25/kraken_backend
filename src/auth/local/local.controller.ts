import { NextFunction, Request, Response } from "express";
import { getUser } from "../../api/user/user.services";
import { singToken } from "../auth.service";

/**
 * Returns a user profile and a JWT token signed by the app secret
 * @param req Request Request object
 * @param res Response Response object
 * @param next NextFunction Next function
 * @returns Promise<Response> Response object
 */
export async function handleLoginUser(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  try {
    const user = await getUser({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const validPassword = await user.comparePassword(password);

    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid email or password ' });
    }

    const payload = user.profile;

    // JWT -> Token
    const token = singToken(payload);

    return res.status(200).json({ profile: user.profile, token });

  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};
