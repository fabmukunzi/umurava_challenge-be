"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const challengeRouter_1 = __importDefault(require("./routes/challengeRouter"));
const challengeCategoryRouter_1 = __importDefault(require("./routes/challengeCategoryRouter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 5000;
(0, db_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Umurava Challenge Backend" });
});
// AppRoutes
app.use("/challenges", challengeRouter_1.default);
app.use("/categories", challengeCategoryRouter_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
