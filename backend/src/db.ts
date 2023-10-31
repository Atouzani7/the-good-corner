import { DataSource } from "typeorm";

export default new DataSource({
  type: "sqlite",
  database: "the_good_corner.sqlite",
  entities: ["src/entities/*.ts"],
  synchronize: true, // permet de mettre à jour la BDD lorsqu'on change une entité
  // logging: ["query","error"],
  logging: true,
});