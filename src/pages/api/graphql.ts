import { ApolloServer, gql } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import type { NextApiRequest, NextApiResponse, PageConfig } from "next";
import { resolvers } from "../../graphql/resolvers";
import typeDefs from "../../graphql/schema";

const server = new ApolloServer({
	  typeDefs,
	  resolvers,
	  plugins: [
		ApolloServerPluginLandingPageGraphQLPlayground(),
	  ],
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
