import { Request, Response } from "express";
import { prisma } from "../../config/db";


class AdminChallengeController {
    static async createChallenge(req: Request, res: Response): Promise<void> {
        try {
            const { title, description, deadline, moneyPrize, seniority, category, skills, contactEmail } = req.body;

            if (!title || !description || !deadline || !category || !contactEmail) {
                res.status(400).json({ message: "Missing required fields" });
                return;
            }

            const existTitle = await prisma.challenge.findUnique({ where: { title } });
            if (existTitle) {
                res.status(400).json({ message: "Challenge title already exists" });
                return;
            }

            const deadlineDate = new Date(deadline);
            const createdAt = new Date();

            if (deadlineDate <= createdAt) {
                res.status(400).json({ message: "Deadline must be in the future" });
                return;
            }

            const durationInDays = Math.ceil((deadlineDate.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24));

            const challenge = await prisma.challenge.create({
                data: {
                    title,
                    description,
                    deadline: deadlineDate,
                    duration: durationInDays,
                    moneyPrize,
                    seniority,
                    category,
                    skills,
                    contactEmail,
                },
            });

            res.status(201).json({ message: "Challenge created successfully", challenge });
        } catch (error) {
            console.error('Create challenge error:', error);
            res.status(500).json({ message: "Server error" });
        }
    }

    static async updateChallenge(req: Request, res: Response): Promise<void> {
        try {
            const { challengeid } = req.params;
            const { title, description, deadline, moneyPrize, seniority, status, category, skills, contactEmail } = req.body;
    
            // Check if the challenge exists
            const challenge = await prisma.challenge.findUnique({ where: { id: challengeid } });
            if (!challenge) res.status(404).json({ message: "Challenge not found" });
    
            // Validate deadline if provided
            if (deadline && new Date(deadline) <= new Date()) {
                res.status(400).json({ message: "Deadline must be in the future" });
            }
    
            // Prepare data for update
            const data = {
                ...(title && { title }),
                ...(description && { description }),
                ...(deadline && {
                    deadline: new Date(deadline),
                    duration: Math.ceil((new Date(deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
                }),
                ...(moneyPrize && { moneyPrize }),
                ...(seniority && { seniority }),
                ...(status && { status }),
                ...(category && { category }),
                ...(skills && { skills }),
                ...(contactEmail && { contactEmail }),
            };
    
            // Update the challenge
            const updatedChallenge = await prisma.challenge.update({
                where: { id: challengeid },
                data,
            });
    
            res.status(200).json({ message: "Challenge updated successfully", updatedChallenge });
        } catch (error) {
            console.error("Update challenge error:", error);
            res.status(500).json({ message: "Server error" });
        }
    }
    

    static async deleteChallenge(req: Request, res: Response): Promise<void> {
        try {
            const { challengeid } = req.params;
    
            // Fetch the challenge with its participants
            const challenge = await prisma.challenge.findUnique({
                where: { id: challengeid },
                include: {
                    participants: true,
                },
            });
    
            // If challenge does not exist
            if (!challenge) {
                res.status(404).json({ message: "Challenge not found" });
                return;
            }
    
            // Check if the challenge has participants
            if (challenge.participants.length > 0) {
                res.status(400).json({ message: "Cannot delete a challenge with participants" });
                return;
            }
    
            // Proceed to delete the challenge if no participants
            await prisma.challenge.delete({ where: { id: challengeid } });
    
            res.status(200).json({ message: "Challenge deleted successfully" });
        } catch (error) {
            console.error("Delete challenge error:", error);
            res.status(500).json({ message: "Server error" });
        }
    }
    


    

    static async getChallengeParticipants(req: Request, res: Response): Promise<void> {
        try {
            const { challengeId } = req.params;
    
            // Fetch the challenge with participants and their details
            const challenge = await prisma.challenge.findUnique({
                where: { id: challengeId },
                include: {
                    participants: {
                        include: {
                            user: { 
                                select: {
                                    name: true,
                                    email: true,
                                },
                            },
                        },
                    },
                },
            });
    
            if (!challenge) {
                res.status(404).json({ message: "Challenge not found." });
                return;
            }
    
            // Map the response for better formatting
            const formattedParticipants = challenge.participants.map(participant => ({
                id: participant.userId,
                name: participant.user.name,
                email: participant.user.email,
            }));
    
            res.status(200).json({
                message: "Participants fetched successfully.",
                challengeTitle: challenge.title,
                participants: formattedParticipants,
            });
        } catch (error) {
            console.error("Get challenge participants error:", error);
            res.status(500).json({ message: "Server error." });
        }
    }
    
      
}

export default AdminChallengeController
       