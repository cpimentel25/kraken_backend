import rosterResolvers from "../api/roster/roster.resolvers";

const resolvers = {
  Query: {
    ...rosterResolvers.query,
  },
}

export default resolvers;
