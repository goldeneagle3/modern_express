import { dietService } from "../business/diet.service";
import { Request, Response } from "express";

class DietController {
  async createDiet(req: Request, res: Response) {
    try {
      const message = await dietService.createDiet(req.body);

      return res.status(201).json(message);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  async listDiet(req: Request, res: Response) {
    try {
      const diets = await dietService.listDiet();
      return res.status(200).json(diets);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  async getDiet(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        throw new Error("No Diet id");
      }
      const diet = await dietService.getDiet(id);

      return res.status(200).json(diet);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  async updateDiet(req: Request, res: Response) {
    try {
      const updatedDiet = await dietService.updateDiet(req.body, req.params.id);
      return res.status(200).json(updatedDiet);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  async deleteDiet(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const message = await dietService.deleteDiet(id);
      return res.status(200).json(message);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }
}

export const dietController = new DietController();
