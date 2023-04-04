import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./schema/resolvers.schema.js";
import { typeDefs } from "./schema/typesDefs.schema.js";

export const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const server = new ApolloServer({ typeDefs, resolvers });
startStandaloneServer(server, {
  listen: { port: 4000 },
})
  .then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`);
  })
  .catch((err) => {
    console.log(err);
  });
