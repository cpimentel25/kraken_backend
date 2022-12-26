import { Request } from "express"
import { UserDocument } from "../api/user/user.model";

export interface AuthRequest extends Request {
  user?: UserDocument;
};

export type Role = 'ADMIN' | 'USER' | 'GUEST';

export type Roles = Role[];
