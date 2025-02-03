"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const challengeCategoryController_1 = __importDefault(require("../controllers/challengeCategoryController"));
const challengeCategoryRouter = (0, express_1.Router)();
challengeCategoryRouter.post("/", challengeCategoryController_1.default.createChallengeCategory);
challengeCategoryRouter.get("/", challengeCategoryController_1.default.getAllChallengeCategories);
challengeCategoryRouter.get("/:categoryid", challengeCategoryController_1.default.getChallengeCategoryById);
challengeCategoryRouter.patch("/:categoryid", challengeCategoryController_1.default.updateChallengeCategory);
challengeCategoryRouter.delete("/:categoryid", challengeCategoryController_1.default.deleteChallengeCategory);
exports.default = challengeCategoryRouter;
