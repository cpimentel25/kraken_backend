import { getAllUsers, getUserByEmail } from "./user.services";

const query = {
  allUsers: async (_parent: any, _args: any) => {
    const user = await getAllUsers();
    return user;
  },
  userByEmail: async (_parent: any, args: any) => {
    const { email } = args;
    const user = await getUserByEmail(email);
    return user;
  },
}

export default {
  query,
};
