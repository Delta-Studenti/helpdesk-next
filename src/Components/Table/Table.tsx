import React from "react";
import { Table } from "@mantine/core";
import { TicketsQuery } from "../../graphql/frontend/tickets.graphql";
import { GoIssueOpened, GoIssueClosed } from "react-icons/go";
import { finishedStatusses } from "../../lib/finished";
import Link from "next/link";

type TableProps = {
  data: TicketsQuery["tickets"];
};

const TaskTable: React.FC<TableProps> = ({ data }) => {
  return (
    <Table highlightOnHover>
      <thead>
        <tr>
          <th>Status</th>
          <th>Název</th>
          <th>Zadavatel</th>
          <th>Zabývá se</th>
          <th>Čas</th>
        </tr>
      </thead>
      <tbody>
        {data.map((ticket) => (
          <Link key={ticket.id} href={`/${ticket.id}`} passHref>
            <tr style={{cursor: "pointer"}}>
              <td>
                {finishedStatusses.includes(ticket.status) ? (
                  <GoIssueClosed color="grey" />
                ) : (
                  <GoIssueOpened color="green" />
                )}
              </td>
              <td>{ticket.title}</td>
              <td>{`${ticket.user.firstName} ${ticket.user.lastName}`}</td>
              <td>TOHLE TEDA MIHAL DODĚLÁ</td>
              <td>{new Date(ticket.createdAt).toLocaleString("CS-cz")}</td>
            </tr>
          </Link>
        ))}
      </tbody>
    </Table>
  );
};

export default TaskTable;
