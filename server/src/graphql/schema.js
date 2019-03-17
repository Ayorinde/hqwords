import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Course {
    name: String
    description: String
  }

  type Query {
    products: [Course]
  }
`;
