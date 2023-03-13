import { getAllValueById, getValuesById, getValuesForCharts } from "./value.services"

const query = {
  allValues: async (_parent: any, args: any) => {
    const { roster, pagination, categorie, rangeValue, createdBy, createdAt } = args;
    const result = await getAllValueById(roster, pagination, categorie, rangeValue, createdBy, createdAt);
    return result;
  },
  allValuesForCharts: async (_parent: any, args: any) => {
    const { roster, categorie, createdBy, createdAt } = args;
    const result = await getValuesForCharts(roster, categorie, createdBy, createdAt);
    return result;
  },
  values: async (_parent: any, args: any) => {
    const { roster } = args;
    const result = await getValuesById(roster);
    if (args.limit) {
      const start = args.offset;
      const end = args.limit;
      return [...result].slice(start, end);
    } else {
      return [...result];
    }
  },
}

export default {
  query,
};
