/* eslint-disable no-useless-catch */
import { Prisma } from "@prisma/client";
import { prisma } from "../config/db";

class ChallengeCategoryService {
  // Create a new challenge category
  static async createChallengeCategory(
    data: Prisma.challengeCategoryCreateInput,
  ): Promise<Prisma.challengeCategoryCreateInput> {
    try {
      // Check if a category with the same title already exists
      const existingCategory = await prisma.challengeCategory.findUnique({
        where: { title: data.title },
      });

      if (existingCategory) {
        throw new Error("A category with this title already exists");
      }

      // Create the category
      const category = await prisma.challengeCategory.create({
        data: {
          title: data.title,
          description: data.description,
        },
      });

      return category;
    } catch (error: unknown) {
      throw error;
    }
  }

  // Get all challenge categories (without pagination)
  static async getAllChallengeCategories(): Promise<
    Prisma.challengeCategoryCreateInput[]
  > {
    try {
      // Retrieve all categories
      const categories = await prisma.challengeCategory.findMany({
        orderBy: { createdAt: "desc" },
      });

      return categories;
    } catch (error: unknown) {
      throw error;
    }
  }

  // Get a single challenge category by ID
  static async getChallengeCategoryById(
    id: string,
  ): Promise<Prisma.challengeCategoryCreateInput | null> {
    try {
      const category = await prisma.challengeCategory.findUnique({
        where: { id },
      });

      if (!category) {
        throw new Error("Challenge category not found");
      }

      return category;
    } catch (error: unknown) {
      throw error;
    }
  }

  // Update a challenge category by ID
  static async updateChallengeCategory(
    id: string,
    data: Prisma.challengeCategoryUpdateInput,
  ): Promise<Prisma.challengeCategoryCreateInput> {
    try {
      // Check if the category exists
      const existingCategory = await prisma.challengeCategory.findUnique({
        where: { id },
      });

      if (!existingCategory) {
        throw new Error("Challenge category not found");
      }

      // Check if the new title is already taken by another category
      if (data.title) {
        const titleExists = await prisma.challengeCategory.findFirst({
          where: {
            title: data.title as string,
            id: { not: id },
          },
        });

        if (titleExists) {
          throw new Error("A category with this title already exists");
        }
      }

      // Update the category
      const updatedCategory = await prisma.challengeCategory.update({
        where: { id },
        data,
      });

      return updatedCategory;
    } catch (error: unknown) {
      throw error;
    }
  }

  // Delete a challenge category by ID
  static async deleteChallengeCategory(id: string): Promise<void> {
    try {
      // Check if the category exists
      const existingCategory = await prisma.challengeCategory.findUnique({
        where: { id },
      });

      if (!existingCategory) {
        throw new Error("Challenge category not found");
      }

      // Delete the category
      await prisma.challengeCategory.delete({
        where: { id },
      });
    } catch (error: unknown) {
      throw error;
    }
  }
}

export default ChallengeCategoryService;
