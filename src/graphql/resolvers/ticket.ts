import { Ticket } from "../../../.cache/__types__";
import prisma from "../../lib/prisma";

export const ticket = async (id: number): Promise<Ticket | null> => {
	const ticket = prisma.ticket.findFirst({
		include: {
			user: true,
			messages: {
				include: {
					user: true,
				},
			},
			statuses: true,
			priority: true,
		},
		where: {
			id,
		},
	});
	return ticket;
};
