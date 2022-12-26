"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUserById = exports.getAllUsers = void 0;
const user_model_1 = __importDefault(require("./user.model"));
function getAllUsers() {
    return user_model_1.default.find({}, { password: 0 }).sort({ createdAt: -1 });
}
exports.getAllUsers = getAllUsers;
;
function getUserById(id) {
    const user = user_model_1.default.findById(id);
    return user;
}
exports.getUserById = getUserById;
;
function getUser(filter) {
    const user = user_model_1.default.findOne(filter);
    return user;
}
exports.getUser = getUser;
// export function getUserByField(field, value: string) {
//   return User.find({ email: value });
// }
function createUser(input) {
    return user_model_1.default.create(input);
}
exports.createUser = createUser;
;
function updateUser(id, user) {
    const updateUser = user_model_1.default.findByIdAndUpdate(id, user, { new: true });
    return updateUser;
}
exports.updateUser = updateUser;
function deleteUser(id) {
    const deleteUser = user_model_1.default.findByIdAndDelete(id);
    return deleteUser;
}
exports.deleteUser = deleteUser;
