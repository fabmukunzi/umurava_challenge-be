import { prisma } from "../config/db";
import { Prisma, skill } from "@prisma/client";

class SkillService {
  // Create a new skill
  static async createSkill(data: Prisma.skillCreateInput): Promise<skill> {
    // Check if the skill already exists
    const existingSkill = await prisma.skill.findUnique({
      where: { name: data.name },
    });

    if (existingSkill) {
      throw new Error("Skill already exists");
    }

    return prisma.skill.create({ data });
  }

  // Get all skills
  static async getAllSkills(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ skills: skill[]; total: number }> {
    if (page < 1 || limit < 1 || limit > 100) {
      throw new Error(
        "Page and limit must be positive integers, and limit cannot exceed 100",
      );
    }

    const skip = (page - 1) * limit;

    const [skills, total] = await Promise.all([
      prisma.skill.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.skill.count(),
    ]);

    return { skills, total };
  }

  // Get a single skill by ID
  static async getSkillById(id: string): Promise<skill | null> {
    return prisma.skill.findUnique({
      where: { id },
    });
  }

  // Update a skill by ID
  static async updateSkill(
    id: string,
    data: Prisma.skillUpdateInput,
  ): Promise<skill> {
    // Check if the skill exists
    const existingSkill = await prisma.skill.findUnique({ where: { id } });
    if (!existingSkill) {
      throw new Error("Skill not found");
    }

    // Check if the new name already exists
    if (data.name) {
      const nameExists = await prisma.skill.findFirst({
        where: { name: data.name as string, id: { not: id } },
      });

      if (nameExists) {
        throw new Error("Skill name already exists");
      }
    }

    return prisma.skill.update({
      where: { id },
      data,
    });
  }

  // Delete a skill by ID
  static async deleteSkill(id: string): Promise<void> {
    // Check if the skill exists
    const existingSkill = await prisma.skill.findUnique({ where: { id } });
    if (!existingSkill) {
      throw new Error("Skill not found");
    }

    await prisma.skill.delete({ where: { id } });
  }
}

export default SkillService;
