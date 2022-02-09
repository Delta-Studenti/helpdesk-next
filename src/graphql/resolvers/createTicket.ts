import { CreateTicketInput } from "../../../.cache/__types__";
import prisma from "../../lib/prisma";
import { CustomContext } from "../../types/context";

export const createTicket = async (
	{ description, groupId, priorityId, title }: CreateTicketInput,
	context: CustomContext,
): Promise<number> => {
	const userId = context.userId();
	if (!userId) throw new Error("Unauthorized");

	if (await prisma.group.count({ where: { id: groupId } }) !== 1) {
		throw new Error("Invalid groupId");
	}

	if (await prisma.priority.count({ where: { id: priorityId } }) !== 1) {
		throw new Error("Invalid priorityId");
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

	return ticket.id;
};
