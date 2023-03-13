const typeDefs = `#graphql
  scalar Date
  # This "Roster" types define the queryable fields for every roster owned in your data base.
  type Roster {
    "Id of roster"
    _id: ID!
    "Title of roster"
    title: String
    "Created roster by"
    createdBy: String
    "Array of Guests roster"
    guests: [Guest] # return a Array of objects
    "Array of value roster"
    values: [Value] # return a Array of objects
    "Date created roster"
    createdAt: String # return string (?)
  }

  type Value {
    _id: ID!
    roster: String
    value: String
    currency: String
    categorie: String
    description: String
    createdBy: String
    createdAt: Date
  }

  type Guest {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Users {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  input Pagination {
    offset: Int
    limit: Int
  }

  input RangeValue {
    min: Int
    max: Int
  }

  input RangeDate {
    before: Date
    after: Date
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    "Fetches an array of Rosters"
    allRoster(offset: Int, limit: Int): [Roster!]
    "Fetches an array of all Users"
    allUsers: [Users!]
    "Fetches an array of all values by created and roster id"
    allValues(roster: String! pagination: Pagination categorie: [String] rangeValue: RangeValue createdBy: [String] createdAt: Date): [Value!] # A list of Values by craeted user and roster owned
    "Fetches an array of all values by created and roster id for Charts"
    allValuesForCharts(roster: String! categorie: [String] rangeValue: RangeValue createdBy: [String] createdAt: Date): [Value!] # A list of Values by craeted user and roster owned
    "Fetches an array all rosters by created user"
    allRostersByCreated(createdBy: String!): [Roster] # A list of Roster by created user
    ""
    userByEmail(email: String): [Users] # Return find user by email or false
    ""
    values(roster: String! offset: Int limit: Int): [Value!]
  }
`;

export default typeDefs;
