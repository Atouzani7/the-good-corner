import { Ad } from "./ads.d";
export interface Tag {
  id: number;
  name: string;
  ads: Ad[];
}