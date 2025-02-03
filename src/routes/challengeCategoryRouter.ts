import { Router } from "express";
import ChallengeCategoryController from "../controllers/challengeCategoryController";

const challengeCategoryRouter = Router();

challengeCategoryRouter.post(
  "/",
  ChallengeCategoryController.createChallengeCategory,
);
challengeCategoryRouter.get(
  "/",
  ChallengeCategoryController.getAllChallengeCategories,
);
challengeCategoryRouter.get(
  "/:categoryid",
  ChallengeCategoryController.getChallengeCategoryById,
);
challengeCategoryRouter.patch(
  "/:categoryid",
  ChallengeCategoryController.updateChallengeCategory,
);
challengeCategoryRouter.delete(
  "/:categoryid",
  ChallengeCategoryController.deleteChallengeCategory,
);

export default challengeCategoryRouter;
