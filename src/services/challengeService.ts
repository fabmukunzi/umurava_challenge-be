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
  private static validateDates(startDate: Date, deadline: Date): void {
    if (isNaN(startDate.getTime()) || isNaN(deadline.getTime())) {
      throw new ValidationError("Invalid date format");
    }

    if (deadline <= startDate) {
      throw new ValidationError("Deadline must be after the start date");
    }
  }
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

  static async createChallenge(
    data: Prisma.challengeCreateInput,
  ): Promise<challenge> {
    const existingChallenge = await prisma.challenge.findFirst({
      where: { challengeTitle: data.challengeTitle },
    });

    if (existingChallenge) {
      throw new ValidationError("Challenge title already exists");
    }

    const categoryExists = await prisma.challengeCategory.findFirst({
      where: { id: data.category as string },
    });

    if (!categoryExists) {
      throw new NotFoundError("Invalid category ID");
    }

    const startDate = new Date(data.startDate as string);
    const deadlineDate = new Date(data.deadline as string);
    this.validateDates(startDate, deadlineDate);

    if (data.skills && Array.isArray(data.skills)) {
      await this.validateSkills(data.skills as string[]);
    }

    if (data.seniority && Array.isArray(data.seniority)) {
      this.validateSeniority(data.seniority as string[]);
    }

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

  static async updateChallenge(
    id: string,
    data: Prisma.challengeUpdateInput,
  ): Promise<challenge> {
    const existingChallenge = await prisma.challenge.findUnique({
      where: { id },
    });

    if (!existingChallenge) {
      throw new NotFoundError("Challenge not found");
    }

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

    if (data.category) {
      const categoryExists = await prisma.challengeCategory.findUnique({
        where: { id: data.category as string },
      });

      if (!categoryExists) {
        throw new NotFoundError("Invalid category ID");
      }
    }

    if (data.deadline || data.startDate) {
      const startDate = new Date(
        (data.startDate as string) || existingChallenge.startDate,
      );
      const deadlineDate = new Date(
        (data.deadline as string) || existingChallenge.deadline,
      );

      this.validateDates(startDate, deadlineDate);
    }

    if (data.skills && Array.isArray(data.skills)) {
      await this.validateSkills(data.skills as string[]);
    }

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

  static async getAllChallenges(
    page: number = 1,
    limit: number = 12,
    categoryId?: string,
    seniority?: string[],
  ): Promise<{
    challenges: challenge[];
    total: number;
    statusCounts: Record<"Open" | "Ongoing" | "Completed", number>;
  }> {
    if (page < 1 || limit < 1 || limit > 100) {
      throw new ValidationError(
        "Page and limit must be positive integers, and limit cannot exceed 100",
      );
    }

    const skip = (page - 1) * limit;
    const now = new Date();

    const where: Prisma.challengeWhereInput = {};
    if (categoryId) where.categoryId = categoryId;
    if (seniority && seniority.length > 0) {
      where.seniority = { hasEvery: seniority };
    }

    const allChallenges = await prisma.challenge.findMany({
      where,
      include: { category: true },
    });

    type ChallengeStatus = "Open" | "Ongoing" | "Completed";

    // eslint-disable-next-line prefer-const
    let statusCounts: Record<ChallengeStatus, number> = {
      Open: 0,
      Ongoing: 0,
      Completed: 0,
    };

    const challengesWithStatus = allChallenges.map((challenge) => {
      const { createdAt, startDate, deadline } = challenge;
      let status: ChallengeStatus;

      if (new Date(createdAt) <= now && now < new Date(startDate)) {
        status = "Open";
      } else if (new Date(startDate) <= now && now < new Date(deadline)) {
        status = "Ongoing";
      } else {
        status = "Completed";
      }

      statusCounts[status] += 1;
      return { ...challenge, status };
    });

    const paginatedChallenges = challengesWithStatus.slice(skip, skip + limit);

    return {
      challenges: paginatedChallenges,
      total: allChallenges.length,
      statusCounts,
    };
  }

  static async getSingleChallenge(id: string): Promise<challenge | null> {
    return prisma.challenge.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
  }

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
