import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Ad } from "./ad.entity";
import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType() // pour mettre / utilisé du graphQL aussi
@Entity()
export class Category {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(()=> [Ad])
  @OneToMany(() => Ad, (ad) => ad.category)
  ads: Ad[];
}

/**========================================================================
 * todo                            INPUT
 *========================================================================**/ 

@InputType()
export class CreateCategoryInput{
  @Field()
  name: string
}