import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import challengeRouter from "./routes/challengeRouter";
import challengeCategoryRouter from "./routes/challengeCategoryRouter";

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(morgan("dev"));
app.get("/", (req: Request, res: Response): void => {
  res.status(200).json({ message: "Welcome to Umurava Challenge Backend" });
});

// AppRoutes
app.use("/challenges", challengeRouter);
app.use("/categories", challengeCategoryRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
