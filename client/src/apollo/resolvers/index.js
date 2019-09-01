import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    user: [ID!]!
  }

  extend type User {
    token: String!
    fullName: String
    email: String!
  }

  extend type Mutation {
    addOrRemoveUser(id: ID!): [User]
  }
`;

export const resolvers = {};