import { DocumentDefinition, FilterQuery } from "mongoose";
import User, { UserDocument } from "./user.model";
import Roster from "../roster/roster.model";

export function getAllUsers() {
  return User.find({}, { password: 0 }).sort({ createdAt: -1 });
};

export function getUserById(id: string) {
  const user = User.findById(id);
  return user;
};

export function getUser(filter: FilterQuery<UserDocument>) {
  const user = User.findOne(filter);
  return user;
};

export function getUserByEmail(email: string) {
  return User.find({'email': email });
}

export function createUser(
  input: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updateAt'>>
) {
  return User.create(input);
};

export function updateUser(
  id: string,
  user: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updateAt'>>
) {
  const updateUser = User.findByIdAndUpdate(id, user, { new: true });
  return updateUser;
};

export function guestUser( email: string, roster: any ) {

  const query = { 'email': email }
  const update = {
    $push: { sharedRoster: roster }
  }

  const guestUser = User
    .findOneAndUpdate(query, update)
    .select({ password: 0, createdAt: 0, updatedAt: 0, isActive: 0, role: 0, guests: 0, sharedRoster: 0 });
  return guestUser
};

export function updateGuestsUser(id: string, user: any) {

  const update = {
    $push: { guests: user }
  }

  const updateGuetsUser = User.findByIdAndUpdate(id, update);
  return updateGuetsUser
};

export function updateGuestsRoster(data: any, user: any) {
  const { idRoster, titleRoster } = data;

  const update = {
    $push: { guests: user }
  }
  const updateRoster = Roster.findByIdAndUpdate(idRoster, update)
  return updateRoster
}

export function deleteUser(id: string) {
  const deleteUser = User.findByIdAndDelete(id);
  return deleteUser;
};
