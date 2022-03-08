import { Router } from "express";

import { userController } from "../controllers/user.controller";

export class UserRoute {
  public static path = "/users";
  private static instance: UserRoute;
  private router = Router();

  private constructor() {
    this.router.post("/", this.create);
    this.router.get("/", this.list);
    this.router.get("/:id", this.read);
    this.router.patch("/:id", this.update);
    this.router.delete("/:id", this.remove);
  }

  static get router() {
    if (!UserRoute.instance) {
      UserRoute.instance = new UserRoute();
    }
    return UserRoute.instance.router;
  }

  private create = userController.createUser;

  private list = userController.listUser;

  private read = userController.getUser;

  private update = userController.updateUser;

  private remove = userController.deleteUser;
}
