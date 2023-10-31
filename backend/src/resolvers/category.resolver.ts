import CategoryService from "../services/category.service"
import { ICreateCategory } from "../types/category";

export default {
    Query: {
        listCategories: async () => {
            const categories = await new CategoryService().list();
            return categories
        }, 
        findCategories: async(_: any, {id}: any) => { // {id} = data
            console.log("data :", id) 
            const category = await new CategoryService().find(+id)
            return category;
        }
    },
    Mutation: {
        createCategory: async (_: any, {data}:{data: {name: string}}) => {
            console.log("Data : " , data)
            const newCategory = await new CategoryService().create({...data})
            return newCategory
        }
    }
}