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
class ChallengeCategoryService {
    // Create a new challenge category
    static createChallengeCategory(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if a category with the same title already exists
                const existingCategory = yield db_1.prisma.challengeCategory.findUnique({
                    where: { title: data.title },
                });
                if (existingCategory) {
                    throw new Error("A category with this title already exists");
                }
                // Create the category
                const category = yield db_1.prisma.challengeCategory.create({
                    data: {
                        title: data.title,
                        description: data.description,
                    },
                });
                logger_1.default.info("Challenge category created successfully", {
                    categoryId: category.id,
                });
                return category;
            }
            catch (error) {
                logger_1.default.error("Error creating challenge category", { error });
                throw error;
            }
        });
    }
    // Get all challenge categories (without pagination)
    static getAllChallengeCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Retrieve all categories
                const categories = yield db_1.prisma.challengeCategory.findMany({
                    orderBy: { createdAt: "desc" },
                });
                logger_1.default.info("Retrieved all challenge categories", {
                    total: categories.length,
                });
                return categories;
            }
            catch (error) {
                logger_1.default.error("Error retrieving challenge categories", { error });
                throw error;
            }
        });
    }
    // Get a single challenge category by ID
    static getChallengeCategoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield db_1.prisma.challengeCategory.findUnique({
                    where: { id },
                });
                if (!category) {
                    throw new Error("Challenge category not found");
                }
                logger_1.default.info("Retrieved challenge category by ID", { categoryId: id });
                return category;
            }
            catch (error) {
                logger_1.default.error("Error retrieving challenge category by ID", { error });
                throw error;
            }
        });
    }
    // Update a challenge category by ID
    static updateChallengeCategory(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the category exists
                const existingCategory = yield db_1.prisma.challengeCategory.findUnique({
                    where: { id },
                });
                if (!existingCategory) {
                    throw new Error("Challenge category not found");
                }
                // Check if the new title is already taken by another category
                if (data.title) {
                    const titleExists = yield db_1.prisma.challengeCategory.findFirst({
                        where: {
                            title: data.title,
                            id: { not: id },
                        },
                    });
                    if (titleExists) {
                        throw new Error("A category with this title already exists");
                    }
                }
                // Update the category
                const updatedCategory = yield db_1.prisma.challengeCategory.update({
                    where: { id },
                    data,
                });
                logger_1.default.info("Challenge category updated successfully", {
                    categoryId: id,
                });
                return updatedCategory;
            }
            catch (error) {
                logger_1.default.error("Error updating challenge category", { error });
                throw error;
            }
        });
    }
    // Delete a challenge category by ID
    static deleteChallengeCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the category exists
                const existingCategory = yield db_1.prisma.challengeCategory.findUnique({
                    where: { id },
                });
                if (!existingCategory) {
                    throw new Error("Challenge category not found");
                }
                // Delete the category
                yield db_1.prisma.challengeCategory.delete({
                    where: { id },
                });
                logger_1.default.info("Challenge category deleted successfully", {
                    categoryId: id,
                });
            }
            catch (error) {
                logger_1.default.error("Error deleting challenge category", { error });
                throw error;
            }
        });
    }
}
exports.default = ChallengeCategoryService;
