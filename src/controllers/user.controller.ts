import { userService } from "../business/user.service";
import { Request, Response } from "express";

class UserController {

  async createUser(req: Request, res: Response) {
    try {
      const message = await userService.createUser(req.body);

      return res.status(201).json(message);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  async listUser(req: Request, res: Response) {
    try {
      const users = await userService.listUser();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        throw new Error("No user id");
      }
      const user = await userService.getUser(id);

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const { id } = req.params;
      const updatedUser = await userService.updateUser(
        { name, email, password },
        id
      );
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const message = await userService.deleteUser(id);
      return res.status(200).json(message);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

}

export const userController = new UserController();
