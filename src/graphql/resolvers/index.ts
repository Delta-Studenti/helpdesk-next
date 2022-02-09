import { Resolvers } from "../../../.cache/__types__";
import { CustomContext } from "../../types/context";
import { login, register } from "./auth";

export const resolvers: Resolvers<CustomContext> = {
	Query: {
		hello: () => "Hello world",
		test: (_a, _b, context) => {
			context.setCookie("token", "test");
			return false;
		},
	},
	Mutation: {
		login: async (_parent, { input }, context) => login(input, context),
		register: async (_parent, { input }, context) => register(input, context),
	},
};
