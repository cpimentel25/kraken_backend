import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserDocument } from "../api/user/user.model";
import { getUser } from "../api/user/user.services";
import { AuthRequest, Roles } from "./auth.types";

const SECRET = process.env.TOKEN_SECRET as string

// singToken ->
/**
 * Returns a JWT signed by the app secret
 * @param payload Object / String Data to be signed
 * @param options Object
 * @returns token String
 */
export function singToken(payload: any, options?: any) {
  const token = jwt.sign(
    payload,
    SECRET,
    options
  );

  return token;
};

// verifyToken ->
/**
 * Validates a JWT
 * @param token String JWT token
 * @returns Object / Boolean
 */
export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, SECRET) as UserDocument;
    return decoded;
  } catch (error) {
    return false;
  };
};

// isAuthenticated ->
export async function isAuthenticated(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.headers?.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  };

  const decoded = verifyToken(token) as UserDocument;

  if (!decoded) {
    return res.status(401).json({ message: 'Unauthorized' });
  };

  const user = await getUser({ email: decoded.email });

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  };

  req.user = user;

  next();
  return true;
};

// hasRol -> CLOSURES
export function hasRole(allowRoles: Roles) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const { role } = req.user as UserDocument;

    if (!allowRoles.includes(role)) {
      return res.status(404).json({ message: 'Forbidden' });
    };

    next();
    return true;
  };
};

// createdBy ->
export async function isCreatedbyId(req: Request, res: Response, next: NextFunction) {
  const search = req.headers?.createdby;
  console.log(search);

  if(search === null) {
    return res.status(404).json({ message: 'Need reload' });
  }

  next();
  return search;
}
