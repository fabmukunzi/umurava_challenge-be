import { Request, Response } from "express";
import ChallengeService from "../services/challengeService";
import {
  challengeSchema,
  updateChallengeSchema,
} from "../validations/challengeValidation";
import { serializeBigInt } from "../utils/serialization";

class ChallengeController {
  static async createChallenge(req: Request, res: Response): Promise<void> {
    try {
      const { error } = challengeSchema.validate(req.body);
      if (error) {
        res.status(400).json({ message: error.details[0].message });
        return;
      }

      const challenge = await ChallengeService.createChallenge(req.body);
      res.status(201).json({
        message: "Challenge created successfully",
        challenge: serializeBigInt(challenge),
      });
    } catch (error: unknown) {
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
        res.status(400).json({ message: error.details[0].message });
        return;
      }

      const { challengeid } = req.params;
      const updatedChallenge = await ChallengeService.updateChallenge(
        challengeid,
        req.body,
      );

      res.status(200).json({
        message: "Challenge updated successfully",
        updatedChallenge: serializeBigInt(updatedChallenge),
      });
    } catch (error: unknown) {
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

      res.status(200).json({
        challenges: serializeBigInt(challenges),
        total,
        page: Number(page),
        limit: Number(limit),
      });
    } catch (error: unknown) {
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
        res.status(404).json({ message: "Challenge not found" });
        return;
      }

      res.status(200).json({ challenge: serializeBigInt(challenge) });
    } catch (error: unknown) {
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
