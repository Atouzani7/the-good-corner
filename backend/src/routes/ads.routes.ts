import { IAdForm } from './../types/ads.d';
import { Router, Request, Response } from "express";
import { Ad } from "../entities/ad.entity";
import { In } from "typeorm";
import { validate } from "class-validator";
import AdsService from "../services/ads.service";
import CategoryService from "../services/category.service";
const router = Router();
router.get("/find/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const ad = await new AdsService().find(+id);

    if (!ad) {
      throw new Error("L'annonce n'existe pas");
    }
    res.json(ad);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}); 
router.get("/list", async (req: Request, res: Response) => {
  const { tagIds } = req.query;
  try {
    const ads = await new AdsService().list(tagIds ? (tagIds as string) : "");
    res.send(ads);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
router.get("/listbycategory/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const category = await new CategoryService().find(+id);
  if (!category) {
    throw new Error("La catégory n'existe pas");
  }
  try {
    const ads = await new AdsService().listByCategory(+id);
    res.send(ads);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post("/create", async (req: Request, res: Response) => {
  try {
    const data: IAdForm = req.body;
    // const { price, ...data }: IAdForm = req.body;
    // const newAd = await new AdsService().create({ ...data, price: +price });
    const newAd = await new AdsService().create(data);
    res.send(newAd);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const adToDelete = await new AdsService().delete(+id);
    res.json(adToDelete);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.patch("/update/:id", async (req: Request, res: Response) => {
  try {
    const data: IAdForm = req.body;
    const { id } = req.params;
    const adToUpdate = await new AdsService().update(+id, data);
    res.send(adToUpdate);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

export default router;

