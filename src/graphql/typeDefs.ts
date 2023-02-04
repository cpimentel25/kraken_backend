const typeDefs = `#graphql
type Query {
  "Fetches an array of Rosters"
  rosters(createdBy: ID!): [Roster] # A list of Roster Owned

  "Fetches an array of Rosters Guests"
  allRosterByGuest(id: ID!): [Roster] # A list of Roster Guest

  rostersByGuests: [Roster]
}

# This "Roster" types define the queryable fields for every roster owned in your data base.
type Roster {
  "Id of roster"
  id: ID!
  "Title of roster"
  title: String
  "Created roster by"
  createdBy: String
  "Array of Guests roster"
  guests: [Guest] # return a Array of objects
  "Array of value roster"
  values: [Value] # return a Array of objects
}

type Value {
  id: ID!
  value: Int
  currency: String
  categorie: String
  description: String
  createdBy: String
  createdAt: String
}

type Guest {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
}

`;

export default typeDefs;
