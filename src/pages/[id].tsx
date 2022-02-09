import type { GetServerSideProps, NextPage } from "next";
import { TicketDocument, useTicketQuery } from "../graphql/frontend/ticket.graphql";
import { client } from "../lib/apollo-server";

type TicketProps = {
	id: number;
	initialApolloState: any;
};

const Ticket: NextPage<TicketProps> = ({ id }) => {
	const { data, loading, error } = useTicketQuery({
		variables: {
			id,
		}
	});

	if (loading) return <p>Loading...</p>;
	if (error || !data || !data.ticket) return <p>Error</p>;

	return (
		<>
			<h1>{data.ticket.id}</h1>
			<h2>{data.ticket.title}</h2>
			<p>{data.ticket.description}</p>
			<div>
				<h3>Messages ({data.ticket.messages.length})</h3>
				{data.ticket.messages.map((message) => (
					<div key={message.id}>
						<h4>{message.text}</h4>
						<p>{`${message.user.firstName} ${message.user.lastName}`}</p>
					</div>
				))}
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps<TicketProps> = async ({ req, query }) => {
	const id = parseInt(query.id as string);
	if (!id) return { notFound: true };

	await client.query({
		query: TicketDocument,
		variables: {
			id,
		},
	});

	const extracted = client.cache.extract();
	
	const data = extracted.ROOT_QUERY?.[`ticket({"id":${id}})`];
	
	if (!data) return { notFound: true };

	return {
		props: {
			id,
			initialApolloState: extracted,
		},
	};
};

export default Ticket;
