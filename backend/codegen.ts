import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: './src/typedefs/*.graphql',
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