"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
const logger_1 = __importDefault(require("../config/logger"));
class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
    }
}
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
class ChallengeService {
    // Helper function to validate dates
    static validateDates(startDate, deadline) {
        if (isNaN(startDate.getTime()) || isNaN(deadline.getTime())) {
            throw new ValidationError("Invalid date format");
        }
        if (deadline <= startDate) {
            throw new ValidationError("Deadline must be after the start date");
        }
    }
    // Helper function to validate skills
    static validateSkills(skills) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingSkills = yield db_1.prisma.skill.findMany({
                where: { name: { in: skills } },
            });
            const invalidSkills = skills.filter((skill) => !existingSkills.some((s) => s.name === skill));
            if (invalidSkills.length > 0) {
                throw new ValidationError(`Invalid skills: ${invalidSkills.join(", ")}`);
            }
        });
    }
    // Helper function to validate seniority
    static validateSeniority(seniority) {
        const validSeniorityLevels = ["Junior", "Intermediate", "Senior"];
        const invalidSeniority = seniority.filter((level) => !validSeniorityLevels.includes(level));
        if (invalidSeniority.length > 0) {
            throw new ValidationError(`Invalid seniority levels: ${invalidSeniority.join(", ")}`);
        }
    }
    // Create a new challenge
    static createChallenge(data) {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.default.info("Creating a new challenge", { data });
            // Check for existing challenge title
            const existingChallenge = yield db_1.prisma.challenge.findFirst({
                where: { challengeTitle: data.challengeTitle },
            });
            if (existingChallenge) {
                throw new ValidationError("Challenge title already exists");
            }
            // Validate category exists
            const categoryExists = yield db_1.prisma.challengeCategory.findFirst({
                where: { id: data.category },
            });
            if (!categoryExists) {
                throw new NotFoundError("Invalid category ID");
            }
            // Validate dates
            const startDate = new Date(data.startDate);
            const deadlineDate = new Date(data.deadline);
            this.validateDates(startDate, deadlineDate);
            // Validate skills
            if (data.skills && Array.isArray(data.skills)) {
                yield this.validateSkills(data.skills);
            }
            // Validate seniority
            if (data.seniority && Array.isArray(data.seniority)) {
                this.validateSeniority(data.seniority);
            }
            // Create the challenge
            return db_1.prisma.challenge.create({
                data: Object.assign(Object.assign({}, data), { startDate, deadline: deadlineDate, createdAt: new Date() }),
                include: {
                    category: true,
                },
            });
        });
    }
    // Update an existing challenge
    static updateChallenge(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.default.info("Updating challenge", { id, data });
            // Check if challenge exists
            const existingChallenge = yield db_1.prisma.challenge.findUnique({
                where: { id },
            });
            if (!existingChallenge) {
                throw new NotFoundError("Challenge not found");
            }
            // If updating title, check for uniqueness
            if (data.challengeTitle) {
                const titleExists = yield db_1.prisma.challenge.findFirst({
                    where: {
                        challengeTitle: data.challengeTitle,
                        id: { not: id },
                    },
                });
                if (titleExists) {
                    throw new ValidationError("Challenge title already exists");
                }
            }
            // If updating category, validate it exists
            if (data.category) {
                const categoryExists = yield db_1.prisma.challengeCategory.findUnique({
                    where: { id: data.category },
                });
                if (!categoryExists) {
                    throw new NotFoundError("Invalid category ID");
                }
            }
            // Validate dates if updated
            if (data.deadline || data.startDate) {
                const startDate = new Date(data.startDate || existingChallenge.startDate);
                const deadlineDate = new Date(data.deadline || existingChallenge.deadline);
                this.validateDates(startDate, deadlineDate);
            }
            // Validate skills if updated
            if (data.skills && Array.isArray(data.skills)) {
                yield this.validateSkills(data.skills);
            }
            // Validate seniority if updated
            if (data.seniority && Array.isArray(data.seniority)) {
                this.validateSeniority(data.seniority);
            }
            return db_1.prisma.challenge.update({
                where: { id },
                data,
                include: {
                    category: true,
                },
            });
        });
    }
    // Get all challenges with pagination and filters
    static getAllChallenges() {
        return __awaiter(this, arguments, void 0, function* (page = 1, limit = 10, categoryId, seniority) {
            if (page < 1 || limit < 1 || limit > 100) {
                throw new ValidationError("Page and limit must be positive integers, and limit cannot exceed 100");
            }
            const skip = (page - 1) * limit;
            // Build where clause based on filters
            const where = {};
            if (categoryId)
                where.categoryId = categoryId;
            if (seniority && seniority.length > 0) {
                where.seniority = {
                    hasEvery: seniority,
                };
            }
            const [challenges, total] = yield Promise.all([
                db_1.prisma.challenge.findMany({
                    skip,
                    take: limit,
                    where,
                    orderBy: { createdAt: "desc" },
                    include: {
                        category: true,
                    },
                }),
                db_1.prisma.challenge.count({ where }),
            ]);
            return { challenges, total };
        });
    }
    // Get a single challenge by ID
    static getSingleChallenge(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return db_1.prisma.challenge.findUnique({
                where: { id },
                include: {
                    category: true,
                },
            });
        });
    }
    // Delete a challenge by ID
    static deleteChallenge(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const challenge = yield db_1.prisma.challenge.findUnique({
                where: { id },
            });
            if (!challenge) {
                throw new NotFoundError("Challenge not found");
            }
            yield db_1.prisma.challenge.delete({ where: { id } });
        });
    }
}
exports.default = ChallengeService;
