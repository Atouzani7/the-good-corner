import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: "http://localhost:4000",
  documents: ['src/requetes/queries/*.queries.ts', 'src/requetes/mutations/*.mutations.ts'],
  generates: {
    './src/types/resolvers-types.ts': {
      config: {
        useIndexSignature: true,
        // maybyeValue: "T | undefine"
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};
export default config;