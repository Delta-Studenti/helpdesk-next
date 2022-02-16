import type { GetServerSideProps, NextPage } from "next";
import { TicketDocument, useTicketQuery } from "../graphql/frontend/ticket.graphql";
import { client } from "../lib/apollo-server";
import MainLayout from "../Components/Layouts/main";
import CustomTimeLine from "../Components/TimeLine/CustomTimeLine";
import { Badge, Text, Title } from "@mantine/core";


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
		<MainLayout title="Tiket" >
			<Title>{data.ticket.title}</Title>
			<Text>{data.ticket.description}</Text>
			<Badge
				variant="filled"
				style={{
					margin: "0.5rem",
				}}
				color="red"
			>{data.ticket.status}</Badge>

			<CustomTimeLine messages={data.ticket.messages} statusses={data.ticket.statuses} />
		</MainLayout>
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
