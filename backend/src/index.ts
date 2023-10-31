import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'; // permet de 
import typeDefs from './typedefs';
import resolvers from './resolvers';
import db from './db';

// // A schema is a collection of type definitions (hence "typeDefs")
// // that together define the "shape" of queries that are executed against
// // your data.

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

// // Les résolveurs définissent la manière de récupérer les types définis dans votre schéma.
// // This resolver retrieves books from the "books" array above.

// // The ApolloServer constructor requires two parameters: your schema
// // definition and your set of resolvers.
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// // Passing an ApolloServer instance to the `startStandaloneServer` function:
// //  1. creates an Express app
// //  2. installs your ApolloServer instance as middleware
// //  3. prepares your app to handle incoming requests

// async function main () {
//   const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
//   context: async ({req, res}) => {
//     return {toto: "tata" }
//   }
// })
// await db.initialize();
// console.log(`🚀  Server ready at: ${url}`)
// }
// ;

// main();

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
