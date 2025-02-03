"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateChallengeSchema = exports.challengeSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.challengeSchema = joi_1.default.object({
    challengeTitle: joi_1.default.string().min(3).max(255).required().trim().messages({
        "string.empty": "Challenge title is required",
        "string.min": "Challenge title must be at least 3 characters long",
        "string.max": "Challenge title cannot exceed 255 characters",
    }),
    description: joi_1.default.string().min(10).required().trim().messages({
        "string.empty": "Description is required",
        "string.min": "Description must be at least 10 characters long",
    }),
    projectBrief: joi_1.default.string().min(10).required().trim().messages({
        "string.empty": "Project brief is required",
        "string.min": "Project brief must be at least 10 characters long",
    }),
    startDate: joi_1.default.date().greater("now").required().messages({
        "date.base": "Start date must be a valid date",
        "date.greater": "Start date must be in the future",
    }),
    deadline: joi_1.default.date().greater(joi_1.default.ref("startDate")).required().messages({
        "date.base": "Deadline must be a valid date",
        "date.greater": "Deadline must be after the start date",
    }),
    moneyPrize: joi_1.default.string().trim().required().messages({
        "string.empty": "Money prize is required",
    }),
    seniority: joi_1.default.array()
        .items(joi_1.default.string().valid("Junior", "Intermediate", "Senior"))
        .min(1)
        .required()
        .messages({
        "array.base": "Seniority must be an array",
        "array.min": "At least one seniority level is required",
        "any.only": "Seniority must be either Junior, Intermediate, or Senior",
        "any.required": "Seniority is required",
    }),
    categoryId: joi_1.default.string()
        .required()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
        "string.empty": "Category ID is required",
        "string.pattern.base": "Category ID must be a valid MongoDB ObjectId",
    }),
    skills: joi_1.default.array()
        .items(joi_1.default.string().trim().min(1).messages({
        "string.empty": "Skill cannot be an empty string",
    }))
        .min(1)
        .required()
        .messages({
        "array.base": "Skills must be an array",
        "array.min": "At least one skill is required",
    }),
    submissionLink: joi_1.default.string().uri().required().messages({
        "string.empty": "Submission link is required",
        "string.uri": "Submission link must be a valid URL",
    }),
    contactEmail: joi_1.default.string().email().required().messages({
        "string.empty": "Contact email is required",
        "string.email": "Contact email must be a valid email address",
    }),
});
exports.updateChallengeSchema = joi_1.default.object({
    challengeTitle: joi_1.default.string().min(3).max(255).trim().messages({
        "string.min": "Challenge title must be at least 3 characters long",
        "string.max": "Challenge title cannot exceed 255 characters",
    }),
    description: joi_1.default.string().min(10).trim().messages({
        "string.min": "Description must be at least 10 characters long",
    }),
    projectBrief: joi_1.default.string().min(10).trim().messages({
        "string.min": "Project brief must be at least 10 characters long",
    }),
    startDate: joi_1.default.date().greater("now").messages({
        "date.base": "Start date must be a valid date",
        "date.greater": "Start date must be in the future",
    }),
    deadline: joi_1.default.date().greater(joi_1.default.ref("startDate")).messages({
        "date.base": "Deadline must be a valid date",
        "date.greater": "Deadline must be after the start date",
    }),
    moneyPrize: joi_1.default.string().trim().messages({
        "string.empty": "Money prize cannot be empty",
    }),
    seniority: joi_1.default.array()
        .items(joi_1.default.string().valid("Junior", "Intermediate", "Senior"))
        .messages({
        "array.base": "Seniority must be an array",
        "any.only": "Seniority must be either Junior, Intermediate, or Senior",
    }),
    categoryId: joi_1.default.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
        "string.pattern.base": "Category ID must be a valid MongoDB ObjectId",
    }),
    skills: joi_1.default.array()
        .items(joi_1.default.string().trim().min(1).messages({
        "string.empty": "Skill cannot be an empty string",
    }))
        .min(1)
        .messages({
        "array.base": "Skills must be an array",
        "array.min": "At least one skill is required",
    }),
    submissionLink: joi_1.default.string().uri().messages({
        "string.uri": "Submission link must be a valid URL",
    }),
    contactEmail: joi_1.default.string().email().messages({
        "string.email": "Contact email must be a valid email address",
    }),
})
    .min(1)
    .messages({
    "object.min": "At least one field must be provided for update",
});
