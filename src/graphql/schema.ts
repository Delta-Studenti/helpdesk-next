import { gql } from "apollo-server-micro";

export default gql`
	type Query {
		hello: String
		test: Boolean
	}

	type Mutation {
		register(input: RegisterInput!): Boolean!
		login(input: LoginInput!): Boolean!
		createTicket(input: CreateTicketInput!): Int!
		createMessage(input: CreateMessageInput!): Boolean!
		createStatus(input: CreateStatusInput!): Boolean!
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

	input CreateTicketInput {
		title: String!
		description: String!
		groupId: Int!
		priorityId: Int!
	}

	input CreateMessageInput {
		ticketId: Int!
		text: String!
	}

	input CreateStatusInput {
		text: String!
		ticketId: Int!
	}
`;
