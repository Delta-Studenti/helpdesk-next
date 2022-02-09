import { CreateStatusInput } from "../../../.cache/__types__";
import currentUser from "../../lib/currentUser";
import prisma from "../../lib/prisma";
import { CustomContext } from "../../types/context";

export const createStatus = async (
	{ text, ticketId }: CreateStatusInput,
	context: CustomContext,
): Promise<boolean> => {
	const userId = context.userId();
	if (!userId) throw new Error("Unauthorized");
	const user = await currentUser(userId);
	if (!user) throw new Error("Unauthorized");
	if (!user.verified) throw new Error("User not verified");

	const ticket = await prisma.ticket.findFirst({ where: { id: ticketId } });

	if (!ticket) {
		throw new Error("Invalid ticketId");
	}

	if (ticket.groupId !== user.groupId || ticket.userId !== userId) {
		throw new Error("Unauthorized");
	}

	
	await prisma.status.create({
		data: {
			title: text,
			ticketId,
		},
	});

	return true;
};
