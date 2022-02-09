import type { GetServerSideProps, NextPage } from 'next'
import { TicketsDocument, useTicketsQuery } from '../graphql/frontend/tickets.graphql';
import { client } from '../lib/apollo-server';
import Link from 'next/link';

const Home: NextPage = () => {
  const {data,loading,error} = useTicketsQuery();
  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error :(</p>;
  return (
    <>
      {data.tickets.map((ticket) => (
        <div key={ticket.id}>
          <h1>
            <Link href={`/${ticket.id}`} passHref>
              <a>
                {ticket.title}
              </a>
            </Link>
          </h1>
          <p>{`${ticket.user.firstName} ${ticket.user.lastName}`}</p>
          <p>{ticket.status}</p>
        </div>
      ))}
    </>
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
}

export default Home;
