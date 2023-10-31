import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CategoryService from "../services/category.service"
import { ICreateCategory } from "../types/category";
import { Category, CreateCategoryInput } from "../entities/category.entity";


@Resolver(() => Category)
export default class CategoryResolver {
  @Query(() => [Category])
  async listCategories() {
    const categories = await new CategoryService().list();
    return categories;
  }
  @Query(() => Category)
  async findCategory(@Arg("id") id: string) {
    const category = await new CategoryService().find(+id);
    return category;
  }
  @Mutation(() => Category)
  async createCategory(@Arg("data") data : CreateCategoryInput ){
    const newCategory = await new CategoryService().create({ ...data });
    return newCategory;
  }
}

export const data =  {
    Query: {
        listCategories: async () => {
            const categories = await new CategoryService().list();
            return categories
        }, 
        findCategories: async(_: any, {id}: any) => { // {id}: data = QueryFindCategoryArgs -> qu'on récupère du resolvers-types
            console.log("data :", id) 
            const category = await new CategoryService().find(+id)
            return category;
        }
    },
    Mutation: {
        createCategory: async (_: any, {data}:{data: CreateCategoryInput}) => { // {data}:  {name: string}  = CreateCategoryInput
            console.log("Data : " , data)
            const newCategory = await new CategoryService().create({...data})
            return newCategory
        }
    }
}
