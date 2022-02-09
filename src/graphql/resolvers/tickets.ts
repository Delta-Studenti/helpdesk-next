import { Ticket } from "../../../.cache/__types__";
import prisma from "../../lib/prisma";

const perPage = 20;

export const tickets = async (page: number | null): Promise<Ticket[]> => {
	if (page === 0) throw new Error("Invalid page number");
	const tickets = prisma.ticket.findMany({
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
		orderBy: {
			createdAt: "desc",
		},
		take: perPage,
		skip: perPage * ((page ?? 1) - 1),
	});
	return tickets;
};
