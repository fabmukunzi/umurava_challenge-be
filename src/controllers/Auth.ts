import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../config/db";
import dotenv from "dotenv";

dotenv.config();

class AuthController {
    static async register(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password, role = "user" } = req.body;

            // Check if user already exists
            const existingUser = await prisma.user.findUnique({ where: { email } });
            if (existingUser) {
                res.status(400).json({ message: "User already exists" });
                return;
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create user
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                    role,
                },
            });

            res.status(201).json({ message: "User registered successfully", user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    }

    static async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;

            // Check if user exists
            const user = await prisma.user.findUnique({ where: { email } });
            if (!user) {
                res.status(401).json({ message: "Invalid credentials" });
                return;
            }

            // Compare password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                res.status(401).json({ message: "Invalid credentials" });
                return;
            }

            // Generate token
            const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: "12h" });

            res.status(200).json({ message: "User Login successfully", token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    }
}

export default AuthController;