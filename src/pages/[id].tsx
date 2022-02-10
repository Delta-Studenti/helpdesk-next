import type { GetServerSideProps, NextPage } from "next";
import { TicketDocument, useTicketQuery } from "../graphql/frontend/ticket.graphql";
import { client } from "../lib/apollo-server";
import { IssueHeader } from "../Components/IssueDetailed/IssueHeader";

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
			<div className="container py-3">
				<IssueHeader ticket={data.ticket} />

				<div id="comments" className="flex-row w-75">
						{data.ticket.messages.map((message) => (
							<div className="p-4 mb-4 rounded-3 bg-light border border-secondary">
								<div className="d-flex flex-column flex-md-row align-items-center pb-1 mb-4 border-bottom">
									<h5>{message.user.firstName + " " + message.user.lastName}</h5>
								</div>
								<p>{message.text}</p>
							</div>
						))}
				</div>
                
				{/* <div className="p-5 mb-4 bg-light rounded-3">
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
				</div> */}
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
