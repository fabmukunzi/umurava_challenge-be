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
const challengeService_1 = __importDefault(require("../services/challengeService"));
const challengeValidation_1 = require("../validations/challengeValidation");
const serialization_1 = require("../utils/serialization");
const logger_1 = __importDefault(require("../config/logger"));
class ChallengeController {
    static createChallenge(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = challengeValidation_1.challengeSchema.validate(req.body);
                if (error) {
                    logger_1.default.warn("Validation error in createChallenge", {
                        error: error.details,
                    });
                    res.status(400).json({ message: error.details[0].message });
                    return;
                }
                const challenge = yield challengeService_1.default.createChallenge(req.body);
                logger_1.default.info("Challenge created successfully", {
                    challengeId: challenge.id,
                });
                res.status(201).json({
                    message: "Challenge created successfully",
                    challenge: (0, serialization_1.serializeBigInt)(challenge),
                });
            }
            catch (error) {
                logger_1.default.error("Create challenge error", { error });
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message || "Server error" });
                }
                else {
                    res.status(500).json({ message: "Unknown error occurred" });
                }
            }
        });
    }
    static updateChallenge(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = challengeValidation_1.updateChallengeSchema.validate(req.body);
                if (error) {
                    logger_1.default.warn("Validation error in updateChallenge", {
                        error: error.details,
                    });
                    res.status(400).json({ message: error.details[0].message });
                    return;
                }
                const { challengeid } = req.params;
                const updatedChallenge = yield challengeService_1.default.updateChallenge(challengeid, req.body);
                logger_1.default.info("Challenge updated successfully", {
                    challengeId: challengeid,
                });
                res.status(200).json({
                    message: "Challenge updated successfully",
                    updatedChallenge: (0, serialization_1.serializeBigInt)(updatedChallenge),
                });
            }
            catch (error) {
                logger_1.default.error("Update challenge error", { error });
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message || "Server error" });
                }
                else {
                    res.status(500).json({ message: "Unknown error occurred" });
                }
            }
        });
    }
    static getAllChallenges(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { page = 1, limit = 10, categoryId, seniority } = req.query;
                // Convert seniority query parameter to an array if it's a string
                const seniorityArray = typeof seniority === "string" ? [seniority] : seniority;
                const { challenges, total } = yield challengeService_1.default.getAllChallenges(Number(page), Number(limit), categoryId, seniorityArray);
                logger_1.default.info("Retrieved all challenges", { total });
                res.status(200).json({
                    challenges: (0, serialization_1.serializeBigInt)(challenges),
                    total,
                    page: Number(page),
                    limit: Number(limit),
                });
            }
            catch (error) {
                logger_1.default.error("Get all challenges error", { error });
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message || "Server error" });
                }
                else {
                    res.status(500).json({ message: "Unknown error occurred" });
                }
            }
        });
    }
    static getSingleChallenge(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { challengeid } = req.params;
                const challenge = yield challengeService_1.default.getSingleChallenge(challengeid);
                if (!challenge) {
                    logger_1.default.warn("Challenge not found", { challengeId: challengeid });
                    res.status(404).json({ message: "Challenge not found" });
                    return;
                }
                logger_1.default.info("Retrieved single challenge", { challengeId: challengeid });
                res.status(200).json({ challenge: (0, serialization_1.serializeBigInt)(challenge) });
            }
            catch (error) {
                logger_1.default.error("Get single challenge error", { error });
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
exports.default = ChallengeController;
