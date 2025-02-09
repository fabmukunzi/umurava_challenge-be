import { Request, Response } from "express";
import SkillService from "../services/skillService";

class SkillController {
  static async createSkill(req: Request, res: Response): Promise<void> {
    try {
      const { name } = req.body;

      if (!name) {
        res.status(400).json({ message: "Skill name is required" });
        return;
      }

      const skill = await SkillService.createSkill({ name });
      res.status(201).json({
        message: "Skill created successfully",
        skill: skill,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message || "Server error" });
      } else {
        res.status(500).json({ message: "Unknown error occurred" });
      }
    }
  }

  static async getAllSkills(req: Request, res: Response): Promise<void> {
    try {
      const { page = 1, limit = 10 } = req.query;

      const { skills, total } = await SkillService.getAllSkills(
        Number(page),
        Number(limit),
      );

      res.status(200).json({
        skills: skills,
        total,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message || "Server error" });
      } else {
        res.status(500).json({ message: "Unknown error occurred" });
      }
    }
  }

  static async getSkillById(req: Request, res: Response): Promise<void> {
    try {
      const { skillid } = req.params;

      if (!skillid) {
        res.status(400).json({ message: "Skill ID is required" });
        return;
      }

      const skill = await SkillService.getSkillById(skillid);
      if (!skill) {
        res.status(404).json({ message: "Skill not found" });
        return;
      }

      res.status(200).json({ skill: skill });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message || "Server error" });
      } else {
        res.status(500).json({ message: "Unknown error occurred" });
      }
    }
  }

  static async updateSkill(req: Request, res: Response): Promise<void> {
    try {
      const { skillid } = req.params;
      const { name } = req.body;

      if (!skillid || !name) {
        res.status(400).json({ message: "Skill ID and name are required" });
        return;
      }

      const updatedSkill = await SkillService.updateSkill(skillid, { name });

      res.status(200).json({
        message: "Skill updated successfully",
        skill: updatedSkill,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message || "Server error" });
      } else {
        res.status(500).json({ message: "Unknown error occurred" });
      }
    }
  }

  static async deleteSkill(req: Request, res: Response): Promise<void> {
    try {
      const { skillid } = req.params;

      if (!skillid) {
        res.status(400).json({ message: "Skill ID is required" });
        return;
      }

      await SkillService.deleteSkill(skillid);
      res.status(200).json({ message: "Skill deleted successfully" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message || "Server error" });
      } else {
        res.status(500).json({ message: "Unknown error occurred" });
      }
    }
  }
}

export default SkillController;
