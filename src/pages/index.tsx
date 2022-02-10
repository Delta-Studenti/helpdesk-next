import type { GetServerSideProps, NextPage } from "next";
import {
    TicketsDocument,
    useTicketsQuery,
} from "../graphql/frontend/tickets.graphql";
import { client } from "../lib/apollo-server";
import Link from "next/link";
import React from "react";
import TicketCard from "../Components/TicketCard/TicketCard";
import MainLayout from "../Components/Layouts/main";

const Home: NextPage = () => {
    const { data, loading, error } = useTicketsQuery();
    if (loading) return <p>Loading...</p>;
    if (error || !data) return <p>Error :(</p>;
    return (
        <MainLayout title="Tikety" sidebarTab="tickets">
            {data.tickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
            ))}
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
