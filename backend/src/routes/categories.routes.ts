import { Router, Request, Response } from "express";
import { Category } from "../entities/category.entity";
import CategoryService from "../services/category.service";
import { ICreateCategory } from "../types/category";
const router = Router();

router.get("/list", async (_, res: Response) => { // route traitée dans le resolver 
  console.log("je suis dans categories");
  try {
    const categories = await new CategoryService().list();
    res.send(categories);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post("/create", async (req: Request, res: Response) => { // route traitée dans le resolver 
  try {
    const data: ICreateCategory = req.body;
    const newCategory = await new CategoryService().create({ ...data });
    res.send(newCategory);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get("/find/:id", async (_, res: Response) => {}); // route traitée dans le resolver 

export default router;