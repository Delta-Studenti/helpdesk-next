import { User } from "@prisma/client";
import prisma from "./prisma";

const currentUser = async (userId: number): Promise<User | null> => {
	return await prisma.user.findFirst({ where: { id: userId } });
};

export default currentUser;
