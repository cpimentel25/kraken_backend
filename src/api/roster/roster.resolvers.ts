import { getAllRoster, getRosters } from "./roster.services"

const query = {
  allRoster: async (_parent: any, _args: any) => {
    const rosters = await getRosters();
    return rosters;
  },
  allRostersByCreated: async (_parent: any, args: any) => {
    const { createdBy } = args;
    const rosters = await getAllRoster(createdBy);
    return rosters;
  },
}

export default {
  query,
};
