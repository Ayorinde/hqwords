export default `
  scalar Date
  type User {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }
  type Auth {
    token: String!
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

  type Category{
    _id: ID!
    name: String
  }

  type Status {
    message: String!
  }

  type Query {
    me: Me
    getCategory(_id: ID!): Category
    getCategories: [Category]
  }

  type Mutation {
    signup(email: String!, fullName: String!, password: String!, 
        userImage: String, username: String): Auth

    login(email: String!, password: String!): Auth

    createCategory(name: String): Category
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;