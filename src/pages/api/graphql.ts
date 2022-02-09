import { ApolloServer, gql } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import type { NextApiRequest, NextApiResponse, PageConfig } from "next";

const server = new ApolloServer({
	  typeDefs: gql`
		type Query {
			hello: String
		}
	  `,
	  resolvers: {
		  Query: {
			  hello: () => "Hello world!",
		  },
	  },
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
