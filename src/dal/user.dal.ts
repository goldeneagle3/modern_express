import { UserModel } from "../entities/models/user.model";
import { DaoBaseRepository } from "../core/dao/DaoBaseRepo";

export class UserDal extends DaoBaseRepository {
  constructor(){
    super(UserModel)
  }
}
