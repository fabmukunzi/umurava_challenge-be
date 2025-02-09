import { Router } from "express";
import ChallengeController from "../controllers/challengeController";

const challengeRouter = Router();

challengeRouter.post("/", ChallengeController.createChallenge);
challengeRouter.patch("/:challengeid", ChallengeController.updateChallenge);
challengeRouter.delete("/:challengeid", ChallengeController.deleteChallenge);
challengeRouter.get("/", ChallengeController.getAllChallenges);
challengeRouter.get("/:challengeid", ChallengeController.getSingleChallenge);

export default challengeRouter;
