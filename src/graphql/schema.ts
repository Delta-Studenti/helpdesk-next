import { gql } from "apollo-server-micro";

export default gql`
	type Query {
		hello: String
		test: Boolean
	}

	type Mutation {
		register(input: RegisterInput!): Boolean!
		login(input: LoginInput!): Boolean!
	}

	input RegisterInput {
		email: String!
		password: String!
		firstName: String!
		lastName: String!
	}

	input LoginInput {
		email: String!
		password: String!
	}
`;
