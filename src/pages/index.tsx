import type { GetServerSideProps, NextPage } from "next";
import {
    TicketsDocument,
    useTicketsQuery,
} from "../graphql/frontend/tickets.graphql";
import { client } from "../lib/apollo-server";
import Link from "next/link";
import React from "react";
import MainLayout from "../Components/Layouts/main";
import { List } from "@mantine/core";
import { GoIssueOpened, GoIssueClosed } from "react-icons/go";
import { finishedStatusses } from "../lib/finished";

const Home: NextPage = () => {
    const { data, loading, error } = useTicketsQuery();
    if (loading) return <p>Loading...</p>;
    if (error || !data) return <p>Error :(</p>;
    return (
        <MainLayout title="Tikety">
            <List>
                {data.tickets.map((ticket) => (
                    <List.Item
                        icon={
                            finishedStatusses.includes(ticket.status) ? <GoIssueClosed color="grey" /> :
                             <GoIssueOpened color="green" />
                        }
                        key={ticket.id}
                    >
                        <Link href={`/${ticket.id}`}>{`#${ticket.id} ${ticket.title} - ${ticket.user.firstName} ${ticket.user.lastName}`}</Link>
                    </List.Item>
                ))}
            </List>
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    await client.query({
        query: TicketsDocument,
    });

    return {
        props: {
            initialApolloState: client.cache.extract(),
        },
    };
};

export default Home;
