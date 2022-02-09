import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from "../graphql/schema";
import { resolvers } from "../graphql/resolvers";

export const client = new ApolloClient({
	ssrMode: true,
	link: new SchemaLink({
		schema: makeExecutableSchema({
			typeDefs,
			resolvers,
		}),
	}),
	cache: new InMemoryCache(),
});
