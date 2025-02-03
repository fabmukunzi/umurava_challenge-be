import { Request, Response } from "express";
import ChallengeService from "../services/challengeService";
import {
  challengeSchema,
  updateChallengeSchema,
} from "../validations/challengeValidation";
import { serializeBigInt } from "../utils/serialization";
import logger from "../config/logger";

class ChallengeController {
  static async createChallenge(req: Request, res: Response): Promise<void> {
    try {
      const { error } = challengeSchema.validate(req.body);
      if (error) {
        logger.warn("Validation error in createChallenge", {
          error: error.details,
        });
        res.status(400).json({ message: error.details[0].message });
        return;
      }

      const challenge = await ChallengeService.createChallenge(req.body);
      logger.info("Challenge created successfully", {
        challengeId: challenge.id,
      });
      res.status(201).json({
        message: "Challenge created successfully",
        challenge: serializeBigInt(challenge),
      });
    } catch (error: unknown) {
      logger.error("Create challenge error", { error });
      if (error instanceof Error) {
        res.status(500).json({ message: error.message || "Server error" });
      } else {
        res.status(500).json({ message: "Unknown error occurred" });
      }
    }
  }

  static async updateChallenge(req: Request, res: Response): Promise<void> {
    try {
      const { error } = updateChallengeSchema.validate(req.body);
      if (error) {
        logger.warn("Validation error in updateChallenge", {
          error: error.details,
        });
        res.status(400).json({ message: error.details[0].message });
        return;
      }

      const { challengeid } = req.params;
      const updatedChallenge = await ChallengeService.updateChallenge(
        challengeid,
        req.body,
      );
      logger.info("Challenge updated successfully", {
        challengeId: challengeid,
      });
      res.status(200).json({
        message: "Challenge updated successfully",
        updatedChallenge: serializeBigInt(updatedChallenge),
      });
    } catch (error: unknown) {
      logger.error("Update challenge error", { error });
      if (error instanceof Error) {
        res.status(500).json({ message: error.message || "Server error" });
      } else {
        res.status(500).json({ message: "Unknown error occurred" });
      }
    }
  }

  static async getAllChallenges(req: Request, res: Response): Promise<void> {
    try {
      const { page = 1, limit = 10, categoryId, seniority } = req.query;

      // Convert seniority query parameter to an array if it's a string
      const seniorityArray =
        typeof seniority === "string" ? [seniority] : seniority;

      const { challenges, total } = await ChallengeService.getAllChallenges(
        Number(page),
        Number(limit),
        categoryId as string,
        seniorityArray as string[],
      );

      logger.info("Retrieved all challenges", { total });
      res.status(200).json({
        challenges: serializeBigInt(challenges),
        total,
        page: Number(page),
        limit: Number(limit),
      });
    } catch (error: unknown) {
      logger.error("Get all challenges error", { error });
      if (error instanceof Error) {
        res.status(500).json({ message: error.message || "Server error" });
      } else {
        res.status(500).json({ message: "Unknown error occurred" });
      }
    }
  }

  static async getSingleChallenge(req: Request, res: Response): Promise<void> {
    try {
      const { challengeid } = req.params;
      const challenge = await ChallengeService.getSingleChallenge(challengeid);
      if (!challenge) {
        logger.warn("Challenge not found", { challengeId: challengeid });
        res.status(404).json({ message: "Challenge not found" });
        return;
      }

      logger.info("Retrieved single challenge", { challengeId: challengeid });
      res.status(200).json({ challenge: serializeBigInt(challenge) });
    } catch (error: unknown) {
      logger.error("Get single challenge error", { error });
      if (error instanceof Error) {
        res.status(500).json({ message: error.message || "Server error" });
      } else {
        res.status(500).json({ message: "Unknown error occurred" });
      }
    }
  }

  // static async searchChallenges(req: Request, res: Response): Promise<void> {
  //   try {
  //     const { q: searchTerm, page = 1, limit = 10 } = req.query;
  //     if (!searchTerm || typeof searchTerm !== "string") {
  //       logger.warn("Search term is missing or invalid", { searchTerm });
  //       res.status(400).json({ message: "Search term is required" });
  //       return;
  //     }

  //     const { challenges, total } = await ChallengeService.searchChallenges(
  //       searchTerm,
  //       Number(page),
  //       Number(limit),
  //     );

  //     logger.info("Searched challenges", { searchTerm, total });
  //     res.status(200).json({
  //       challenges: serializeBigInt(challenges),
  //       total,
  //       page: Number(page),
  //       limit: Number(limit),
  //     });
  //   } catch (error: unknown) {
  //     logger.error("Search challenges error", { error });
  //     if (error instanceof Error) {
  //       res.status(500).json({ message: error.message || "Server error" });
  //     } else {
  //       res.status(500).json({ message: "Unknown error occurred" });
  //     }
  //   }
  // }
}

export default ChallengeController;
