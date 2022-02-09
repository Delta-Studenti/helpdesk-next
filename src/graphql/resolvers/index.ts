import { Resolvers } from "../../../.cache/__types__";
import { CustomContext } from "../../types/context";

export const resolvers: Resolvers<CustomContext> = {
	Query: {
		hello: () => "Hello world",
		test: (_a, _b, context) => {
			context.setCookie("token", "test");
			return false;
		},
	},
};
