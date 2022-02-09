import { Resolvers } from "../../../.cache/__types__";
import { CustomContext } from "../../types/context";
import { login, register } from "./auth";
import { createMessage } from "./createMessage";
import { createStatus } from "./createStatus";
import { createTicket } from "./createTicket";
import { ticket } from "./ticket";
import { tickets } from "./tickets";

export const resolvers: Resolvers<CustomContext> = {
	Query: {
		hello: () => "Hello world",
		test: (_a, _b, context) => {
			context.setCookie("token", "test");
			return false;
		},
		tickets: async (_parent, { page }) => tickets(page ?? null),
		ticket: async (_parent, { id }) => ticket(id),
	},
	Mutation: {
		login: async (_parent, { input }, context) => login(input, context),
		register: async (_parent, { input }, context) => register(input, context),
		createMessage: async (_parent, { input }, context) => createMessage(input, context),
		createStatus: async (_parent, { input }, context) => createStatus(input, context),
		createTicket: async (_parent, { input }, context) => createTicket(input, context),
	},
};
