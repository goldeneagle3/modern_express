import { IUser } from "entities/interfaces/user.interface";
import { UserDal } from "../dal/user.dal";

class UserService {

  private userDal = new UserDal();

  createUser(body) {
    //  Business Code
    const { name, email, password } = body;
    
    if (password?.length < 8) {
      throw new Error("Password is wrong!");
    }
    // Business Code
    return this.userDal.create(body);
  }

  listUser(){
    return this.userDal.list();
  }

  getUser(param){
    return this.userDal.read(param);
  }

  updateUser(body:IUser,userId:string){
    return this.userDal.update(body,userId);
  }

  deleteUser(param){
    return this.userDal.delete(param);
  }
}

export const userService = new UserService();
