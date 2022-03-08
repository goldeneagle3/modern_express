import { IDiet } from "entities/interfaces/diet.interface";
import { DietDal } from "../dal/diet.dal";

class DietService {
  private dietDal = new DietDal();

  createDiet(body) {
    // Business Code
    return this.dietDal.create(body);
  }

  listDiet() {
    // Business Code
    return this.dietDal.list();
  }

  getDiet(param) {
    // Business Code
    return this.dietDal.read(param);
  }

  updateDiet(body: IDiet, dietId: string) {
    // Business Code
    return this.dietDal.update(body, dietId);
  }

  deleteDiet(param) {
    // Business Code
    return this.dietDal.delete(param);
  }
}

export const dietService = new DietService();
