import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  scalar Date
  type Auth {
    token: String!
  }

  type Service {
    _id: ID!
    name: String
    description: String!
    icon: String
    bannerImage: String
    thumbnail: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Me {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    userImage: String
    createdAt: Date!
    updatedAt: Date!
  }

  type User {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    userImage: String
    createdAt: Date!
    updatedAt: Date!
  }



  type Category{
    _id: ID!
    name: String
  }

  type Tag{
    _id: ID!
    name: String
  }

  type Book{
    _id: ID!
    title: String!
    description: String
    artwork: String
    price: String
    category: Category
    author: User
    authors: [User]
    tags: [Tag]
  }

  input createBookInput{
    title: String!
    description: String!
    artwork: String 
    price: String
    category: ID
    author: ID
    authors: [ID]
    tags: [ID]
  }


  type Query {    
    me: Me
    getService(_id: ID!): Service
    services: [Service]

    getCategory(_id: ID!): Category
    getCategories: [Category]

    book(_id: ID!): Book
    books: [Book]
  }

  type Mutation {
    signup(email: String!, fullName: String!, password: String!, userImage: String, username: String): Auth
    login(email: String!, password: String!): Auth

    createService(name: String!, description: String, icon: String, thumbnail: String, bannerImage: String ): Service
    createCategory(name: String): Category

    createBook(input: createBookInput): Book


  }

  
`;
