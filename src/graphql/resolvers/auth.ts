import { LoginInput, RegisterInput } from "../../../.cache/__types__";
import { generateToken } from "../../lib/jwt";
import { compareHash, createHash } from "../../lib/password";
import prisma from "../../lib/prisma";
import { CustomContext } from "../../types/context";

export const login = async (
	{ email, password }: LoginInput,
	context: CustomContext
): Promise<boolean> => {
	const user = await prisma.user.findFirst({
		where: {
			email: email.toLocaleLowerCase(),
		},
	});

	if (!user) {
		throw new Error("User does not exist");
	}

	if (!await compareHash(password, user.password)) {
		throw new Error("Invalid password");
	}

	const token = generateToken(user.id, `${user.firstName} ${user.lastName}`);
	
	context.setCookie("token", token);

	return true;
};

export const register = async (
	{ email, password, firstName, lastName }: RegisterInput,
	context: CustomContext
): Promise<boolean> => {
	const existingUser = await prisma.user.findFirst({
		where: {
			email: email.toLocaleLowerCase(),
		},
	});
	if (existingUser) {
		throw new Error("User already exists");
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

	context.setCookie("token", token);

	return true;
};
