import { Request, Response } from "express";
import { prisma } from "../../config/db";


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

    /**
     * function to add a participant to a challenge
     * @param req 
     * @param res 
     * @returns 
     */
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

    static async getUserChallenges(req: Request, res: Response): Promise<void> {
        try {
            const { userId } = req.params;
    
            // Fetch the user details
            const user = await prisma.user.findUnique({
                where: { id: userId },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    challenges: {
                        select: {
                            challenge: true,
                        },
                    },
                },
            });
    
            if (!user) {
                res.status(404).json({ message: "User not found." });
                return;
            }
    
            // Format the response
            const response = {
                userId: user.id,
                name: user.name,
                email: user.email,
                challenges: user.challenges.map(participant => participant.challenge),
            };
    
            res.status(200).json({
                message: "User challenges fetched successfully.",
                user: response,
            });
        } catch (error) {
            console.error("Get user challenges error:", error);
            res.status(500).json({ message: "Server error." });
        }
    }

    static async getUserOpenChallenges(req: Request, res: Response): Promise<void> {
        try {
            const { userId } = req.params;
    
            // Fetch the user details and all challenges
            const user = await prisma.user.findUnique({
                where: { id: userId },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    challenges: {
                        select: {
                            challenge: true,
                        },
                    },
                },
            });
    
            if (!user) {
                res.status(404).json({ message: "User not found." });
                return;
            }
    
            // Filter challenges by status
            const openChallenges = user.challenges.filter(participant => participant.challenge.status === 'Open');
    
            // Format the response
            const response = {
                userId: user.id,
                name: user.name,
                email: user.email,
                challenges: openChallenges.map(participant => participant.challenge),
                totalOpenChallenges: openChallenges.length,
            };
    
            res.status(200).json({
                message: "User open challenges fetched successfully.",
                user: response,
            });
        } catch (error) {
            console.error("Get user open challenges error:", error);
            res.status(500).json({ message: "Server error." });
        }
    }

    static async getUserOngoingChallenges(req: Request, res: Response): Promise<void> {
        try {
            const { userId } = req.params;
    
            // Fetch the user details and all challenges
            const user = await prisma.user.findUnique({
                where: { id: userId },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    challenges: {
                        select: {
                            challenge: true,
                        },
                    },
                },
            });
    
            if (!user) {
                res.status(404).json({ message: "User not found." });
                return;
            }
    
            // Filter challenges by status
            const ongoingChallenges = user.challenges.filter(participant => participant.challenge.status === 'Ongoing');
    
            // Format the response
            const response = {
                userId: user.id,
                name: user.name,
                email: user.email,
                challenges: ongoingChallenges.map(participant => participant.challenge),
                totalOngoingChallenges: ongoingChallenges.length,
            };
    
            res.status(200).json({
                message: "User ongoing challenges fetched successfully.",
                user: response,
            });
        } catch (error) {
            console.error("Get user ongoing challenges error:", error);
            res.status(500).json({ message: "Server error." });
        }
    }

    static async getUserCompletedChallenges(req: Request, res: Response): Promise<void> {
        try {
            const { userId } = req.params;
    
            // Fetch the user details and all challenges
            const user = await prisma.user.findUnique({
                where: { id: userId },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    challenges: {
                        select: {
                            challenge: true,
                        },
                    },
                },
            });
    
            if (!user) {
                res.status(404).json({ message: "User not found." });
                return;
            }
    
            // Filter challenges by status
            const completedChallenges = user.challenges.filter(participant => participant.challenge.status === 'Completed');
    
            // Format the response
            const response = {
                userId: user.id,
                name: user.name,
                email: user.email,
                challenges: completedChallenges.map(participant => participant.challenge),
                totalCompletedChallenges: completedChallenges.length,
            };
    
            res.status(200).json({
                message: "User completed challenges fetched successfully.",
                user: response,
            });
        } catch (error) {
            console.error("Get user completed challenges error:", error);
            res.status(500).json({ message: "Server error." });
        }
    }

    static async getChallengeDetails(req: Request, res: Response): Promise<void> {
        try {
            const { challengeId } = req.params;
    
            // Fetch the challenge details
            const challenge = await prisma.challenge.findUnique({
                where: { id: challengeId },
            });
    
            if (!challenge) {
                res.status(404).json({ message: "Challenge not found." });
                return;
            }
    
            // Format the response
            const response = {
                id: challenge.id,
                title: challenge.title,
                description: challenge.description,
                deadline: challenge.deadline,
                duration: challenge.duration,
                moneyPrize: challenge.moneyPrize,
                seniority: challenge.seniority,
                status: challenge.status,
                category: challenge.category,
                skills: challenge.skills,
                contactEmail: challenge.contactEmail,
                createdAt: challenge.createdAt,
            };
    
            res.status(200).json({
                message: "Challenge details fetched successfully.",
                challenge: response,
            });
        } catch (error) {
            console.error("Get challenge details error:", error);
            res.status(500).json({ message: "Server error." });
        }
    }
    
    
}

export default UserChallengeController;