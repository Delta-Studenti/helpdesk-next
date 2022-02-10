import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { TicketQuery } from "../../graphql/frontend/ticket.graphql";

type TicketCardProps = {
    ticket?: TicketQuery["ticket"];
};

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
    const createdAt = new Date(ticket?.createdAt).toLocaleDateString();
    const router = useRouter();
    return (
        <div
            className="d-flex flex-row align-items-center justify-content-between shadow-sm mx-4 my-2 p-2 cursor-pointer hover:translate-y-0.5  h-10 rounded-md even:bg-gray-200 odd:bg-gray-100"
            onClick={() => router.push("/" + ticket?.id)}
        >
            <div className="d-flex justify-content-start gap-1 w-auto">
                <p className="">{ticket?.user.firstName}</p>
                <p>{ticket?.user.lastName}</p>
            </div>
            <div className="min-w-fit">
                <p>#{ticket?.id}</p>
            </div>
            <div className="min-w-fit w-32">
                <p>{ticket?.title}</p>
            </div>
            <div className="w-25 d-flex justify-around px-5">
                <span
                    className={`badge 
                    ${
                        ticket?.status == "Otevřený"
                            ? "bg-warning"
                            : "bg-secondary"
                    }
                    ${
                        ticket?.status == "Vyřešený"
                            ? "bg-success"
                            : "bg-secondary"
                    }
                    `}
                >
                    {ticket?.status}
                </span>
            </div>
            <div className="w-auto">
                <p>{createdAt}</p>
            </div>
        </div>
    );
};

export default TicketCard;
