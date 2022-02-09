import { Resolvers } from "../../../.cache/__types__";

export const resolvers: Resolvers = {
	Query: {
		hello: () => "Hello world",
		test: () => false,
	},
};
