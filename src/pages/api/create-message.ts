import prisma from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { createHash } from "../../lib/password";
import { generateToken, validateToken } from "../../lib/jwt";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (!req.body) {
		res.status(400).json({
			message: "No data provided",
		});
		return;
	}

	const userId = validateToken(req.cookies.token ?? "");
	if (!userId) {
		res.status(401).json({
			message: "Unauthorized",
		});
		return;
	}

	const user = await prisma.user.findFirst({ where: { id: userId } });

	if (!user?.verified) {
		res.status(403).json({
			message: "User not verified",
		});
		return;
	}

	const { ticketId, text } = req.body;
	if (
		!text ||
		!ticketId ||
		typeof text !== "string" ||
		typeof ticketId !== "number"
	) {
		res.status(400).json({
			message: "Invalid data provided",
		});
		return;
	}

	const ticket = await prisma.ticket.findFirst({ where: { id: ticketId } });

	if (!ticket) {
		res.status(400).json({
			message: "Invalid messageId",
		});
		return;
	}

	if (ticket.groupId !== user.groupId || ticket.userId !== userId) {
		res.status(403).json({
			message: "Unauthorized",
		});
		return;
	}

	
	await prisma.message.create({
		data: {
			text,
			userId,
			ticketId,
		},
	});
	

	res.status(200).json({ message: "OK" });
};
