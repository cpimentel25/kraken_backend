// import { QueryResolvers, Resolvers } from "../generated/graphql";

// // Data store practice ->
// const roster = [
//   {
//     id: "dhn4sjc2391ns4h3d752j21",
//     title: 'tests Apollo graphQl',
//     createdBy: 'cp123ag098',
//     guests: [
//       {
//         id: "hnk42sm10x",
//         firstName: "Juan",
//         lastName: "Pimentel",
//         email: "jp_test@kraken.com",
//       },
//       {
//         id: "3ngs9gh10chs",
//         firstName: "Peter",
//         lastName: "Bouwnin",
//         email: "pb_test@kraken.net",
//       }
//     ],
//     values: [
//       {
//         id: "ghb3jt96mb83m",
//         value: 123,
//         currency: "USD",
//         categorie: "Home",
//         description: "market",
//         createdBy: "JD",
//         createdAt: "01/02/23",
//       }
//     ],
//   },
//   {
//     id: "dhj4sjc6391ns45dm8u7541",
//     title: 'Kraken test GraphQl',
//     createdBy: 'taa792c2',
//     guests: [
//       {
//         id: "hnk42sm10xx",
//         firstName: "Juan",
//         lastName: "Pimentel",
//         email: "jp_test@kraken.com",
//       },
//       {
//         id: "3ngs9gh10chss",
//         firstName: "Peter",
//         lastName: "Bouwnin",
//         email: "pb_test@kraken.net",
//       }
//     ],
//   },
//   {
//     id: "d3j4sjf63r5ns45d23d541",
//     title: 'GraphQl',
//     createdBy: 'cp123ag098',
//     guests: [
//       {
//         id: "hnk42sm10xxx",
//         firstName: "Juan",
//         lastName: "Pimentel",
//         email: "jp_test@kraken.com",
//       },
//       {
//         id: "3ngs9gh10chsss",
//         firstName: "Peter",
//         lastName: "Bouwnin",
//         email: "pb_test@kraken.net",
//       }
//     ]
//   },
//   {
//     id: "dhj4sc3c6332s45rrm85s41",
//     title: 'Kraken v0.1.3',
//     createdBy: 'taa792c2',
//     guests: [],
//   }
// ];

// const values = [
//   {
//     value: 123,
//     currency: "USD",
//     categorie: "Home",
//     description: "market",
//     createdBy: "JD",
//     createdAt: "01/02/23",
//   }
// ];

// const guests = [
//   {
//     id: "hnk42sm10x",
//     firstName: "Juan",
//     lastName: "Pimentel",
//     email: "jp_test@kraken.com",
//   },
//   {
//     id: "3ngs9gh10chs",
//     firstName: "Peter",
//     lastName: "Bouwnin",
//     email: "pb_test@kraken.net",
//   }
// ];

// const Query: QueryResolvers = {
//   rosters: (_parent: any, args: any) => {
//     const { createdBy } = args;
//     return roster.filter((roster: { createdBy: any; }) => roster.createdBy === createdBy);
//   },
// };

// const resolvers: Resolvers = {
//   Query,
// }

// export default resolvers;
