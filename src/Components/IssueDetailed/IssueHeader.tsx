import Link from "next/link";
import React, { FC } from "react";
import { TicketQuery } from "../../graphql/frontend/ticket.graphql";
import { tickets } from "../../graphql/resolvers/tickets";

type IssueHeaderProps = {
    ticket: TicketQuery["ticket"];
};

const ticketStatusBadgeClassName = (ticketStatus : String) =>  { return "badge rounded-pill px-2" + (ticketStatus === "closed" ? " bg-success" : " bg-danger"); }

const IssueHeader: FC<IssueHeaderProps> = ({ ticket }) => {

    return (
        <>
            <div className="d-flex flex-column flex-md-row align-items-center ">
                <h2>{ticket!.title}<span className="text-muted"> #{ticket!.id}</span></h2>

                <div className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <Link href={`/create-ticket`} passHref>
                    <a className="btn btn-sm btn-outline-primary" >Nový problém</a>
                </Link>
                    
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <h5><span className={ticketStatusBadgeClassName(ticket!.status)} >{ticket!.status}</span></h5>
            <h6 className="px-2"> vytvořeno uživatelem {ticket!.user.firstName + " " + ticket!.user.lastName} · počet komentářů: {ticket!.messages.length}</h6>
            </div>
        </>
    );
};

export { IssueHeader };