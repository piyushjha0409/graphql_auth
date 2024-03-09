//here will be the schema
export const typeDefs = `#graphql
  type User {
    id: ID!,
    first_name: String!,
    last_name: String!,
    email: String,
    age: Int,
    active: Boolean
  }

  input NewUserInput {
    id: ID!,
    first_name: String!,
    last_name: String!,
    email: String,
    age: Int,
  }

  input UpdateNewUser {
    id: ID!,
    first_name: String!,
    last_name: String!,
    email: String,
    age: Int,
    active: Boolean
  }

  type Query {
    user: [User]
  }

  type Mutation {
    createUser(input: NewUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(id: ID!): String 
  }

`