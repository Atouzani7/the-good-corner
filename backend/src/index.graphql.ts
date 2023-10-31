import "reflect-metadata";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'; // permet de 
import typeDefs from './typedefs';
import resolvers from './resolvers';
import db from './db';


const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const server = new ApolloServer<{}>({
  typeDefs, // => index.ts dans typeDef (.graphQL) => typeDef = shema
  resolvers, // => index.ts dans resolver = Service

});

async function main() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req, res }) => {
      return {};
    },
  });
  await db.initialize();

  console.log(`🚀  Server ready at: ${url}`);
}
main();
