import { Router } from "express";
import AuthController from "../controllers/Auth";
import { verifyToken } from "../Middleware/Verify";
import { authorizeRole } from "../Middleware/Verify";
import AdminChallengeController from "../controllers/Admin/AdminChallengeController";
import UserChallengeController from "../controllers/User/UserChallengeController";

const router = Router();

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);

router.post("/challenge/create-challenge", verifyToken, authorizeRole("admin"), AdminChallengeController.createChallenge);
router.put("/challenge/update-challenge/:challengeid", verifyToken, authorizeRole("admin"), AdminChallengeController.updateChallenge);
router.delete("/challenge/delete-challenge/:challengeid", verifyToken, authorizeRole("admin"), AdminChallengeController.deleteChallenge);
router.get("/challenge/participants/:challengeId", verifyToken, authorizeRole("admin"), AdminChallengeController.getChallengeParticipants);

router.post("/challenge/add-participant", verifyToken, authorizeRole("user"), UserChallengeController.addParticipantToChallenge);
router.get("/challenge/all-challenges", UserChallengeController.getAllChallenges);
router.get("/challenge/my-challenges/", verifyToken, authorizeRole("user"), UserChallengeController.myChallenges);


export default router;