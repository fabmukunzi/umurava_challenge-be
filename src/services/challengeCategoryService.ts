/* eslint-disable no-useless-catch */
import { Prisma } from "@prisma/client";
import { prisma } from "../config/db";

class ChallengeCategoryService {
  static async createChallengeCategory(
    data: Prisma.challengeCategoryCreateInput,
  ): Promise<Prisma.challengeCategoryCreateInput> {
    try {
      const existingCategory = await prisma.challengeCategory.findUnique({
        where: { title: data.title },
      });

      if (existingCategory) {
        throw new Error("A category with this title already exists");
      }

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

  static async getAllChallengeCategories(): Promise<
    Prisma.challengeCategoryCreateInput[]
  > {
    try {
      const categories = await prisma.challengeCategory.findMany({
        orderBy: { createdAt: "desc" },
      });

      return categories;
    } catch (error: unknown) {
      throw error;
    }
  }

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

  static async updateChallengeCategory(
    id: string,
    data: Prisma.challengeCategoryUpdateInput,
  ): Promise<Prisma.challengeCategoryCreateInput> {
    try {
      const existingCategory = await prisma.challengeCategory.findUnique({
        where: { id },
      });

      if (!existingCategory) {
        throw new Error("Challenge category not found");
      }

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

      const updatedCategory = await prisma.challengeCategory.update({
        where: { id },
        data,
      });

      return updatedCategory;
    } catch (error: unknown) {
      throw error;
    }
  }

  static async deleteChallengeCategory(id: string): Promise<void> {
    try {
      const existingCategory = await prisma.challengeCategory.findUnique({
        where: { id },
      });

      if (!existingCategory) {
        throw new Error("Challenge category not found");
      }

      await prisma.challengeCategory.delete({
        where: { id },
      });
    } catch (error: unknown) {
      throw error;
    }
  }
}

export default ChallengeCategoryService;
