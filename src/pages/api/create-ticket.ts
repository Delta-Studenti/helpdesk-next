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

	if (!(await prisma.user.findFirst({ where: { id: userId } }))?.verified) {
		res.status(403).json({
			message: "User not verified",
		});
		return;
	}

	const { title, description, groupId, priorityId } = req.body;
	if (
		!title ||
		!description ||
		!groupId ||
		!priorityId ||
		typeof title !== "string" ||
		typeof description !== "string" ||
		typeof groupId !== "number" ||
		typeof priorityId !== "number"
	) {
		res.status(400).json({
			message: "Invalid data provided",
		});
		return;
	}

	if (await prisma.group.count({ where: { id: groupId } }) !== 1) {
		res.status(400).json({
			message: "Invalid groupId",
		});
		return;
	}

	if (await prisma.priority.count({ where: { id: priorityId } }) !== 1) {
		res.status(400).json({
			message: "Invalid priorityId",
		});
		return;
	}

	
	const ticket = await prisma.ticket.create({
		data: {
			title,
			description,
			groupId,
			priorityId,
			status: "Created",
			userId,
		},
	});
	

	res.status(200).json({ number: ticket.id });
};
