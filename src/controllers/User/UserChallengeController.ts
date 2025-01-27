import { Request, Response } from "express";
import { prisma } from "../../config/db";


interface AuthRequest extends Request {
    user?: {
        id: string;
        role: string;
    };
}

class UserChallengeController {
    static async getAllChallenges(req: Request, res: Response): Promise<void> {
        try {
            const challenges = await prisma.challenge.findMany();

            res.status(200).json({ message: "Challenges fetched successfully", challenges });
        } catch (error) {
            console.error('Get all challenges error:', error);
            res.status(500).json({ message: "Server error" });
        }
    }

    static async addParticipantToChallenge(req: Request, res: Response): Promise<void> {
        try {
            const { challengeId, userId } = req.body;
    
            // Check if the challenge exists and its status is "Open"
            const challenge = await prisma.challenge.findUnique({
                where: { id: challengeId },
            });
            if (!challenge) {
                res.status(404).json({ message: "Challenge not found" });
                return;
            }
            if (challenge.status !== "Open") {
                res.status(400).json({ message: "Challenge is not open for participation" });
                return;
            }
    
            // Check if the user exists
            const user = await prisma.user.findUnique({
                where: { id: userId },
            });
            if (!user) {
                res.status(404).json({ message: "User not found" });
                return;
            }
    
            // Check if the user is already a participant in the challenge
            const existingParticipant = await prisma.challengeParticipant.findFirst({
                where: {
                    challengeId,
                    userId,
                },
            });
            if (existingParticipant) {
                res.status(400).json({ message: "User is already a participant in this challenge" });
                return;
            }
    
            // Add the user to the challenge
            const participant = await prisma.challengeParticipant.create({
                data: {
                    challengeId,
                    userId,
                },
            });
    
            res.status(201).json({ message: "Participant added successfully", participant, challenge: { id: challenge.id, title: challenge.title }, user: { id: user.id, name: user.name } });
        } catch (error) {
            console.error('Add participant to challenge error:', error);
            res.status(500).json({ message: "Server error" });
        }
    }

    static async myChallenges(req: AuthRequest, res: Response): Promise<void> {
        try {
            // Extract the user ID from the `req.params` object
            const userId = req.user?.id;

            if (!userId) {
                res.status(400).json({ message: "User ID is required" });
                return;
            }

            const challenges = await prisma.challenge.findMany({
                where: {
                    participants: {
                        some: {
                            userId: userId,
                        },
                    },
                },
                select: {
                    id: true,
                    title: true,
                    description: true,
                    deadline: true,
                    moneyPrize: true,
                    category: true,
                },
            });

            res.status(200).json({
                message: "My challenges fetched successfully",
                challenges,
            });
        } catch (error) {
            console.error("Get my challenges error:", error);
            res.status(500).json({ message: "Server error" });
        }
    }

    
    
}

export default UserChallengeController;