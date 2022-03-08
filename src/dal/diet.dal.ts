import { DietModel } from "../entities/models/diet.model";
import { DaoBaseRepository } from "../core/dao/DaoBaseRepo";

export class DietDal extends DaoBaseRepository {
  constructor(){
    super(DietModel)
  }
}
