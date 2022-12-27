import { ObjectId } from "mongoose";

export type UserProfileType = {
  id: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAt: Date;
};
