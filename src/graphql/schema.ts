import { gql } from "apollo-server-micro";

export default gql`
	scalar Date

	type Query {
		hello: String
		test: Boolean
		tickets(page: Int): [Ticket!]!
		ticket(id: Int!): Ticket
	}

	type Ticket {
		id: Int!
		title: String!
		description: String!
		status: String!
		user: User!
		createdAt: Date!
		messages: [Message!]!
		statuses: [Status!]!
		priority: Priority!
	}

	type Message {
		id: Int!
		text: String!
		user: User!
	}

	type Status {
		id: Int!
		title: String!
	}

	type Priority {
		id: Int!
		title: String!
	}

	type User {
		id: Int!
		firstName: String!
		lastName: String!
		email: String!
		admin: Boolean!
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
