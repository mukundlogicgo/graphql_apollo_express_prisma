import { PrismaClient } from "@prisma/client";
import { books } from "../index.js";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    // user query
    users: async () => {
      return await prisma.user.findMany();
    },
    user: async (_, { id }) => {
      return await prisma.user.findUnique({ where: { id } });
    },

    // book query
    books: async () => {
      return await prisma.book.findMany();
    },
    book: async (_, { id }) => {
      return await prisma.book.findUnique({ where: { id } });
    },
  },

  Mutation: {
    // user mutation
    createUser: async (_, { name, email }) => {
      return await prisma.user.create({ data: { name, email } });
    },
    updateUser: async (_, { id, name, email }) => {
      return await prisma.user.update({ where: { id }, data: { name, email } });
    },
    deleteUser: async (_, { id }) => {
      return await prisma.user.delete({ where: { id } });
    },

    // book mutation
    createBook: async (_, { title, authorId }) => {
      return await prisma.book.create({ data: { title, authorId } });
    },
    updateBook: async (_, { id, title, authorId }) => {
      return await prisma.book.update({
        where: { id },
        data: { title, authorId },
      });
    },
    deleteBook: async (_, { id }) => {
      return await prisma.book.delete({ where: { id } });
    },
  },

  Subscription: {
    users: {
      subscribe: () => pubsub.asyncIterator(["USERS_UPDATED"]),
      resolve: (payload) => payload.users,
    },
  },

  User: {
    books: async (parent) => {
      return await prisma.book.findMany({ where: { authorId: parent.id } });
    },
  },
  Book: {
    author: async (parent) => {
      return await prisma.user.findUnique({ where: { id: parent.authorId } });
    },
  },
};
