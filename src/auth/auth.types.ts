import { Request } from "express"
import { UserDocument } from "../api/user/user.model";
import { ValueDocument } from "../api/value/value.model";
import { Document } from "mongoose";

export interface AuthRequest extends Request {
  user?: UserDocument;
};

export interface UserById extends Document {
  createdBy?: ValueDocument;
}

export type Role = 'ADMIN' | 'USER' | 'GUEST';

export type Roles = Role[];
