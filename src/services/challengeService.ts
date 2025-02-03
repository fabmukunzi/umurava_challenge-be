import { prisma } from "../config/db";
import { challenge, Prisma } from "@prisma/client";

class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

class ChallengeService {
  // Helper function to validate dates
  private static validateDates(startDate: Date, deadline: Date): void {
    if (isNaN(startDate.getTime()) || isNaN(deadline.getTime())) {
      throw new ValidationError("Invalid date format");
    }

    if (deadline <= startDate) {
      throw new ValidationError("Deadline must be after the start date");
    }
  }

  // Helper function to validate skills
  private static async validateSkills(skills: string[]): Promise<void> {
    const existingSkills = await prisma.skill.findMany({
      where: { name: { in: skills } },
    });

    const invalidSkills = skills.filter(
      (skill) => !existingSkills.some((s) => s.name === skill),
    );

    if (invalidSkills.length > 0) {
      throw new ValidationError(`Invalid skills: ${invalidSkills.join(", ")}`);
    }
  }

  // Helper function to validate seniority
  private static validateSeniority(seniority: string[]): void {
    const validSeniorityLevels = ["Junior", "Intermediate", "Senior"];
    const invalidSeniority = seniority.filter(
      (level) => !validSeniorityLevels.includes(level),
    );

    if (invalidSeniority.length > 0) {
      throw new ValidationError(
        `Invalid seniority levels: ${invalidSeniority.join(", ")}`,
      );
    }
  }

  // Create a new challenge
  static async createChallenge(
    data: Prisma.challengeCreateInput,
  ): Promise<challenge> {

    // Check for existing challenge title
    const existingChallenge = await prisma.challenge.findFirst({
      where: { challengeTitle: data.challengeTitle },
    });

    if (existingChallenge) {
      throw new ValidationError("Challenge title already exists");
    }

    // Validate category exists
    const categoryExists = await prisma.challengeCategory.findFirst({
      where: { id: data.category as string },
    });

    if (!categoryExists) {
      throw new NotFoundError("Invalid category ID");
    }

    // Validate dates
    const startDate = new Date(data.startDate as string);
    const deadlineDate = new Date(data.deadline as string);
    this.validateDates(startDate, deadlineDate);

    // Validate skills
    if (data.skills && Array.isArray(data.skills)) {
      await this.validateSkills(data.skills as string[]);
    }

    // Validate seniority
    if (data.seniority && Array.isArray(data.seniority)) {
      this.validateSeniority(data.seniority as string[]);
    }

    // Create the challenge
    return prisma.challenge.create({
      data: {
        ...data,
        startDate,
        deadline: deadlineDate,
        createdAt: new Date(),
      },
      include: {
        category: true,
      },
    });
  }

  // Update an existing challenge
  static async updateChallenge(
    id: string,
    data: Prisma.challengeUpdateInput,
  ): Promise<challenge> {

    // Check if challenge exists
    const existingChallenge = await prisma.challenge.findUnique({
      where: { id },
    });

    if (!existingChallenge) {
      throw new NotFoundError("Challenge not found");
    }

    // If updating title, check for uniqueness
    if (data.challengeTitle) {
      const titleExists = await prisma.challenge.findFirst({
        where: {
          challengeTitle: data.challengeTitle as string,
          id: { not: id },
        },
      });

      if (titleExists) {
        throw new ValidationError("Challenge title already exists");
      }
    }

    // If updating category, validate it exists
    if (data.category) {
      const categoryExists = await prisma.challengeCategory.findUnique({
        where: { id: data.category as string },
      });

      if (!categoryExists) {
        throw new NotFoundError("Invalid category ID");
      }
    }

    // Validate dates if updated
    if (data.deadline || data.startDate) {
      const startDate = new Date(
        (data.startDate as string) || existingChallenge.startDate,
      );
      const deadlineDate = new Date(
        (data.deadline as string) || existingChallenge.deadline,
      );

      this.validateDates(startDate, deadlineDate);
    }

    // Validate skills if updated
    if (data.skills && Array.isArray(data.skills)) {
      await this.validateSkills(data.skills as string[]);
    }

    // Validate seniority if updated
    if (data.seniority && Array.isArray(data.seniority)) {
      this.validateSeniority(data.seniority as string[]);
    }

    return prisma.challenge.update({
      where: { id },
      data,
      include: {
        category: true,
      },
    });
  }

  // Get all challenges with pagination and filters
  static async getAllChallenges(
    page: number = 1,
    limit: number = 10,
    categoryId?: string,
    seniority?: string[],
  ): Promise<{ challenges: challenge[]; total: number }> {
    if (page < 1 || limit < 1 || limit > 100) {
      throw new ValidationError(
        "Page and limit must be positive integers, and limit cannot exceed 100",
      );
    }

    const skip = (page - 1) * limit;

    // Build where clause based on filters
    const where: Prisma.challengeWhereInput = {};
    if (categoryId) where.categoryId = categoryId;
    if (seniority && seniority.length > 0) {
      where.seniority = {
        hasEvery: seniority,
      };
    }

    const [challenges, total] = await Promise.all([
      prisma.challenge.findMany({
        skip,
        take: limit,
        where,
        orderBy: { createdAt: "desc" },
        include: {
          category: true,
        },
      }),
      prisma.challenge.count({ where }),
    ]);

    return { challenges, total };
  }

  // Get a single challenge by ID
  static async getSingleChallenge(id: string): Promise<challenge | null> {
    return prisma.challenge.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
  }

  // Delete a challenge by ID
  static async deleteChallenge(id: string): Promise<void> {
    const challenge = await prisma.challenge.findUnique({
      where: { id },
    });

    if (!challenge) {
      throw new NotFoundError("Challenge not found");
    }

    await prisma.challenge.delete({ where: { id } });
  }

  // // Search challenges by title, description, or skills
  // static async searchChallenges(
  //   searchTerm: string,
  //   page: number = 1,
  //   limit: number = 10,
  // ): Promise<{ challenges: challenge[]; total: number }> {
  //   if (page < 1 || limit < 1 || limit > 100) {
  //     throw new ValidationError(
  //       "Page and limit must be positive integers, and limit cannot exceed 100",
  //     );
  //   }

  //   const skip = (page - 1) * limit;

  //   const where: Prisma.challengeWhereInput = {
  //     OR: [
  //       { challengeTitle: { contains: searchTerm, mode: "insensitive" } },
  //       { description: { contains: searchTerm, mode: "insensitive" } },
  //       { skills: { has: searchTerm } },
  //     ],
  //   };

  //   const [challenges, total] = await Promise.all([
  //     prisma.challenge.findMany({
  //       where,
  //       skip,
  //       take: limit,
  //       orderBy: { createdAt: "desc" },
  //       include: {
  //         category: true,
  //       },
  //     }),
  //     prisma.challenge.count({ where }),
  //   ]);

  //   return { challenges, total };
  // }
}

export default ChallengeService;
