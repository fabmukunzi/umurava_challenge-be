import express from "express";
import SkillController from "../controllers/skillController";

const Skillrouter = express.Router();

Skillrouter.post("/", SkillController.createSkill);
Skillrouter.get("/", SkillController.getAllSkills);
Skillrouter.get("/:skillid", SkillController.getSkillById);
Skillrouter.patch("/:skillid", SkillController.updateSkill);
Skillrouter.delete("/:skillid", SkillController.deleteSkill);

export default Skillrouter;
