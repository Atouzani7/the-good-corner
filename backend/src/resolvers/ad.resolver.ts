import { Arg, Mutation, Query, Resolver } from "type-graphql";
import AdsService from "../services/ads.service"
import CategoryService from "../services/category.service";
import { IAdForm, IUpdateAdForm } from "../types/ads";
import { MutationDeleteAdArgs } from "../types/resolvers-types";
import { Ad, AdDeleted, CreateAdInput, UpdateAdInput } from "../entities/ad.entity";


//todo ____________ Avec GraphType

@Resolver()
export class AdResolver {
  @Query(()=> [Ad])
  async listAds (){
    const ads = await new AdsService().list("");
    console.log("ADS", ads);
    return ads;
  }
  @Query(() => [Ad])
  async listAdsByCategory(@Arg("id") id: string) {
    const category = await new CategoryService().find(+id);
    if (!category) {
      throw new Error("La catégorie n'existe pas");
    }
    const ads = await new AdsService().listByCategory(+id);
    return ads;
  }
  @Query(() => [Ad])
  async findAdById(@Arg("id") id: string){
    console.log(id);
    const ad = await new AdsService().find(+id);
    if (!ad) {
    throw new Error("L'annonce n'existe pas");
    }
    return ad;
  }
  @Mutation(() => Ad)
  async createAd(@Arg("data") data: CreateAdInput) {
    const newAd = await new AdsService().create(data);
      return newAd;
  }
  @Mutation(() => AdDeleted)
  async deleteAd(@Arg("id") id: string){
    return await new AdsService().delete(+id);
  }
  @Mutation(() => Ad)
  async updateAd(@Arg("data") data: UpdateAdInput) {
    const { id, ...otherData } = data;
    const adToUpdate = await new AdsService().update(+id, otherData);
    return adToUpdate;
  }

}


//todo ____________ Sans GraphType
 
export const adData = {
    Query: {
        listAds: async () => {
            const ads = new AdsService().list("");
            return ads; 
        },
        listAdsByCategory:async (_:any, {id} : {id: string} ) => {
            const category = await new CategoryService().find(+id);
      if (!category) {
        throw new Error("La catégorie n'existe pas");
      }
      const ads = await new AdsService().listByCategory(+id);
      return ads;
        },
         findAdById: async (_: any, {id}:  {id: string}) => { // Arguments (parent, param dans la query .graphQL, le ctx , ) // {id: string} remplacable par : QueryFindAdByIdArgs, trouvé dans le resolver
                console.log(id);
                const ad = await new AdsService().find(+id);
                if (!ad) {
                  throw new Error("L'annonce n'existe pas");
                }
                return ad;
          
              
        }
    },
    Mutation: {
      createAd: async (_: any, { data }: { data: IAdForm }) => {
            const newAd = await new AdsService().create(data);
            return newAd;
    },
    deleteAd: async (_: any, { id }: { id: MutationDeleteAdArgs }) => { // MutationDeleteAdArgs -> string
      return await new AdsService().delete(+id);
    },
    updateAd: async(_: any, { data }: {data: IUpdateAdForm} ) => {
      const {id, ...otherData} = data;
      const adToUpdate = await new AdsService().update(_, otherData);
      return adToUpdate;
    }
}}