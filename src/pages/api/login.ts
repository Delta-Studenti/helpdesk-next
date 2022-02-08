import prisma from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { generateToken } from "../../lib/jwt";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (!req.body) {
		res.status(400).json({
			message: "No data provided"
		});
		return;
	}

	const { password, email } = req.body;
	if (!password || !email || typeof password !== "string" || typeof email !== "string") {
		res.status(400).json({
			message: "Invalid data provided"
		});
		return;
	}

	const user = await prisma.user.findFirst({
		where: {
			email: email.toLocaleLowerCase(),
		},
	});

	if (!user) {
		res.status(400).json({
			message: "User does not exist"
		});
		return;
	}

	const token = generateToken(user.id, `${user.firstName} ${user.lastName}`);

	res.setHeader("Set-Cookie", [`token=${token}; Path=/; HttpOnly`]);


	res.status(200).json({ message: "OK" });
};
