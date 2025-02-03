"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeBigInt = serializeBigInt;
function serializeBigInt(obj) {
    if (typeof obj === "bigint") {
        return obj.toString();
    }
    else if (obj instanceof Date) {
        return obj.toISOString(); // Convert Date to ISO string
    }
    else if (Array.isArray(obj)) {
        return obj.map(serializeBigInt);
    }
    else if (typeof obj === "object" && obj !== null) {
        const result = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                result[key] = serializeBigInt(obj[key]);
            }
        }
        return result;
    }
    return obj;
}
