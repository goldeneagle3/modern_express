import { Router } from "express";

import { dietController } from "../controllers/diet.controller";



export class DietRoute {
  public static path = "/diets";
  private static instance: DietRoute;
  private router = Router();

  private constructor() {
    this.router.post("/", this.create);
    this.router.get("/", this.list);
    this.router.get("/:id", this.read);
    this.router.patch("/:id", this.update);
    this.router.delete("/:id", this.remove);
  }

  static get router() {
    if (!DietRoute.instance) {
      DietRoute.instance = new DietRoute();
    }
    return DietRoute.instance.router;
  }

  private create = dietController.createDiet;

  private list = dietController.listDiet;

  private read = dietController.getDiet;

  private update = dietController.updateDiet;

  private remove = dietController.deleteDiet;
}
