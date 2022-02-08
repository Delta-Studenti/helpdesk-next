import jwt from "jsonwebtoken";
import { Token } from "../types/token";

const secret = process.env.APP_SECRET;
if (!secret) throw new Error("APP_SECRET is not defined");

export const generateToken = (userId: number, name: string): string => {
	const payload: Token = {
		userId,
		name,
	};
	return jwt.sign(payload, secret);
};

export const validateToken = (token: string): number | null => {
	try {
		const payload = jwt.verify(token, secret) as Token;
		return payload.userId;
	} catch (err) {
		return null;
	}
};
