import User from "./user.model";

export function getAllUsers() {
  return User.find({}, { password: 0 }).sort({ createdAt: -1 });
};

export function getUserById(id) {
  const user = User.findById(id);
  return user;
};

export function getUserByField(field, value) {
  return User.find({ email: value });
}

export function createUser(user) {
  return User.create(user);
};

export function updateUser(id, user) {
  const updateUser = User.findByIdAndUpdate(id, user, { new: true });
  return updateUser;
}

export function deleteUser(id) {
  const deleteUser = User.findByIdAndDelete(id);
  return deleteUser;
}
