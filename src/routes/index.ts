import { Router } from 'express';
import { DietRoute } from './diet.routes';

import { UserRoute } from './user.routes';


export class ApiRoutes {
  public static path = '/api';
  private static instance: ApiRoutes;
  private router = Router();

  private constructor() {

    // this.router.get('/', this.get);
    this.router.use(UserRoute.path, UserRoute.router);
    this.router.use(DietRoute.path, DietRoute.router);
  }

  static get router() {
    if (!ApiRoutes.instance) {
      ApiRoutes.instance = new ApiRoutes();
    }
    return ApiRoutes.instance.router;
  }

}