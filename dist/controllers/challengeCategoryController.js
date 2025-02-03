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
const challengeCategoryService_1 = __importDefault(require("../services/challengeCategoryService"));
class ChallengeCategoryController {
    static createChallengeCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description } = req.body;
                if (!title || !description) {
                    res.status(400).json({ message: "Title and description are required" });
                    return;
                }
                const category = yield challengeCategoryService_1.default.createChallengeCategory({
                    title,
                    description,
                });
                res.status(201).json({
                    message: "Challenge category created successfully",
                    category: category,
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message || "Server error" });
                }
                else {
                    res.status(500).json({ message: "Unknown error occurred" });
                }
            }
        });
    }
    static getAllChallengeCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield challengeCategoryService_1.default.getAllChallengeCategories();
                res.status(200).json({
                    categories: categories,
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message || "Server error" });
                }
                else {
                    res.status(500).json({ message: "Unknown error occurred" });
                }
            }
        });
    }
    static getChallengeCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { categoryid } = req.params;
                const category = yield challengeCategoryService_1.default.getChallengeCategoryById(categoryid);
                if (!category) {
                    res.status(404).json({ message: "Challenge category not found" });
                    return;
                }
                res.status(200).json({ category: category });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message || "Server error" });
                }
                else {
                    res.status(500).json({ message: "Unknown error occurred" });
                }
            }
        });
    }
    static updateChallengeCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { categoryid } = req.params;
                const { title, description } = req.body;
                if (!title && !description) {
                    res.status(400).json({
                        message: "At least one field (title or description) is required",
                    });
                    return;
                }
                const updatedCategory = yield challengeCategoryService_1.default.updateChallengeCategory(categoryid, {
                    title,
                    description,
                });
                res.status(200).json({
                    message: "Challenge category updated successfully",
                    category: updatedCategory,
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message || "Server error" });
                }
                else {
                    res.status(500).json({ message: "Unknown error occurred" });
                }
            }
        });
    }
    static deleteChallengeCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { categoryid } = req.params;
                yield challengeCategoryService_1.default.deleteChallengeCategory(categoryid);
                res
                    .status(200)
                    .json({ message: "Challenge category deleted successfully" });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message || "Server error" });
                }
                else {
                    res.status(500).json({ message: "Unknown error occurred" });
                }
            }
        });
    }
}
exports.default = ChallengeCategoryController;
