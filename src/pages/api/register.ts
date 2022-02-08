import prisma from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { createHash } from "../../lib/password";
import { generateToken } from "../../lib/jwt";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (!req.body) {
		res.status(400).json({
			message: "No data provided"
		});
		return;
	}

	const { password, email, firstName, lastName } = req.body;
	if (!password || !email || !firstName || !lastName || typeof password !== "string" || typeof email !== "string" || typeof firstName !== "string" || typeof lastName !== "string") {
		res.status(400).json({
			message: "Invalid data provided"
		});
		return;
	}

	const existingUser = await prisma.user.findFirst({
		where: {
			email: email.toLocaleLowerCase(),
		},
	});

	if (existingUser) {
		res.status(400).json({
			message: "User already exists"
		});
		return;
	}

	const hash = await createHash(password);

	const user = await prisma.user.create({
		data: {
			email: email.toLocaleLowerCase(),
			firstName,
			lastName,
			password: hash,
		},
	});

	const token = generateToken(user.id, `${user.firstName} ${user.lastName}`);

	res.setHeader("Set-Cookie", [`token=${token}; Path=/; HttpOnly`]);

	res.status(200).json({ message: "OK" });
};
