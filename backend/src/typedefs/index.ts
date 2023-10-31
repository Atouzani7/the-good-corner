import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge"; // permet de combiner tout les .graphQL

const typesArray = loadFilesSync(".", { extensions: ["graphql"] });

export default mergeTypeDefs(typesArray); 