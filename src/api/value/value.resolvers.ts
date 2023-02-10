import { getAllValueById } from "./value.services"

const query = {
  allValues: async (_parent: any, args: any) => {
    const { roster, pagination, categorie, rangeValue, createdBy, createdAt } = args;
    const result = await getAllValueById(roster, pagination, categorie, rangeValue, createdBy, createdAt);
    return result;
  },
  // allValuesByGuests: async (_parent: any, args: any) => {
  //   const { createdBy, roster } = args;
  //   const result = await getAllValueById(createdBy, roster);
  //   return result;
  // },
}

export default {
  query,
};
