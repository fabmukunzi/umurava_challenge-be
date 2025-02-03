export function serializeBigInt(obj: unknown): unknown {
  if (typeof obj === "bigint") {
    return obj.toString();
  } else if (obj instanceof Date) {
    return obj.toISOString(); // Convert Date to ISO string
  } else if (Array.isArray(obj)) {
    return obj.map(serializeBigInt);
  } else if (typeof obj === "object" && obj !== null) {
    const result: Record<string, unknown> = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[key] = serializeBigInt((obj as Record<string, unknown>)[key]);
      }
    }
    return result;
  }
  return obj;
}
