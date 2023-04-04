export const typeDefs = `#graphql
  type Query {
    # user query
    users: [User!]!
    user(id: Int!): User

    # book query
    books: [Book!]!
    book(id: Int!): Book
  }

  type Mutation {
    # user mutation schema
    createUser(name: String!, email: String!): User!
    updateUser(id: Int!, name: String, email: String): User!
    deleteUser(id: Int!): User!

    # book mutation schema
    createBook(title: String!, authorId: Int!): Book!
    updateBook(id: Int!, title: String, authorId: Int): Book!
    deleteBook(id: Int!): Book!
  }
 
  type User {
    id: Int!
    name: String!
    email: String!
    books: [Book!]!
  }

  type Subscription {
    users: [User!]!
  }

  type Book {
    id: Int!
    title: String!
    author: User!
  }






`;
