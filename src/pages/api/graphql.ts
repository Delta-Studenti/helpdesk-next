import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import type { NextApiRequest, NextApiResponse, PageConfig } from "next";
import { resolvers } from "../../graphql/resolvers";
import typeDefs from "../../graphql/schema";
import { CustomContext } from "../../types/context";
import { validateToken } from "../../lib/jwt";

const context = ({ res, req }: { res: NextApiResponse, req: NextApiRequest }): CustomContext => {
	return {
		setCookie: (key: string, value: string) => {
			res.setHeader("Set-Cookie", [`${key}=${value}; Path=/; HttpOnly`]);
		},
		userId: () => validateToken(req.cookies.token ?? ""),
	}
}

const server = new ApolloServer({
	  typeDefs,
	  resolvers,
	  plugins: [
		ApolloServerPluginLandingPageGraphQLPlayground(),
	  ],
	  context,
});

const startServer = server.start();

export const config: PageConfig = {
	api: {
		bodyParser: false,
	},
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await startServer;
	await server.createHandler({ path: "/api/graphql" })(req,res);
}

export default handler;
