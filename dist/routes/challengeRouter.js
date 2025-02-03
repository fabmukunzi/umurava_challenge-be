"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const challengeController_1 = __importDefault(require("../controllers/challengeController"));
const challengeRouter = (0, express_1.Router)();
challengeRouter.post("/", challengeController_1.default.createChallenge);
challengeRouter.patch("/:challengeid", challengeController_1.default.updateChallenge);
challengeRouter.delete("/:challengeid", challengeController_1.default.createChallenge);
challengeRouter.get("/", challengeController_1.default.getAllChallenges);
challengeRouter.get("/:challengeid", challengeController_1.default.getSingleChallenge);
// challengeRouter.get("/search", ChallengeController.searchChallenges);
exports.default = challengeRouter;
