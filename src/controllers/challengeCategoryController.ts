import { Request, Response } from "express";
import ChallengeCategoryService from "../services/challengeCategoryService";
import { serializeBigInt } from "../utils/serialization";

class ChallengeCategoryController {
  static async createChallengeCategory(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const { title, description } = req.body;

      if (!title || !description) {
        res.status(400).json({ message: "Title and description are required" });
        return;
      }

      const category = await ChallengeCategoryService.createChallengeCategory({
        title,
        description,
      });

      res.status(201).json({
        message: "Challenge category created successfully",
        category: serializeBigInt(category),
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message || "Server error" });
      } else {
        res.status(500).json({ message: "Unknown error occurred" });
      }
    }
  }

  static async getAllChallengeCategories(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const categories =
        await ChallengeCategoryService.getAllChallengeCategories();

      res.status(200).json({
        categories: serializeBigInt(categories),
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message || "Server error" });
      } else {
        res.status(500).json({ message: "Unknown error occurred" });
      }
    }
  }

  static async getChallengeCategoryById(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const { categoryid } = req.params;

      const category =
        await ChallengeCategoryService.getChallengeCategoryById(categoryid);

      if (!category) {
        res.status(404).json({ message: "Challenge category not found" });
        return;
      }

      res.status(200).json({ category: serializeBigInt(category) });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message || "Server error" });
      } else {
        res.status(500).json({ message: "Unknown error occurred" });
      }
    }
  }

  static async updateChallengeCategory(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const { categoryid } = req.params;
      const { title, description } = req.body;

      if (!title && !description) {
        res.status(400).json({
          message: "At least one field (title or description) is required",
        });
        return;
      }

      const updatedCategory =
        await ChallengeCategoryService.updateChallengeCategory(categoryid, {
          title,
          description,
        });

      res.status(200).json({
        message: "Challenge category updated successfully",
        category: serializeBigInt(updatedCategory),
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message || "Server error" });
      } else {
        res.status(500).json({ message: "Unknown error occurred" });
      }
    }
  }

  static async deleteChallengeCategory(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const { categoryid } = req.params;

      await ChallengeCategoryService.deleteChallengeCategory(categoryid);

      res
        .status(200)
        .json({ message: "Challenge category deleted successfully" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message || "Server error" });
      } else {
        res.status(500).json({ message: "Unknown error occurred" });
      }
    }
  }
}

export default ChallengeCategoryController;
