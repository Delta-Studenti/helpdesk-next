import Link from "next/link";
import React from "react";
import { ticket } from "../../types/ticket";
import { TicketQuery } from "../../graphql/frontend/ticket.graphql";
type TicketCardProps = {
    ticket: TicketQuery["ticket"];
};

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
    const createdAt = new Date(ticket.createdAt).toLocaleDateString();
    return (
        <div>
            {/* <div className="d-flex flex-row align-items-center justify-content-between shadow-lg rounded bg-body rounded-3 m-4 ">
            <div className="col">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                />
            </div>
            <div className="col d-flex justify-content-between">
                <p className="">{ticket.user.firstName}</p>
                <p>{ticket.user.lastName}</p>
            </div>
            <div className="col">
                <p>#{ticket.id}</p>
            </div>
            <div className="col">
                <p>{ticket.title}</p>
            </div>
            <div className="col">
                <span
                    className={`badge 
                    ${
                        ticket.status == "Otevřený"
                            ? "bg-warning"
                            : "bg-secondary"
                    }
                    ${
                        ticket.status == "Vyřešený"
                            ? "bg-success"
                            : "bg-secondary"
                    }
                    `}
                >
                    {ticket.status}
                </span>
            </div>
            <div className="col">
                <p>{createdAt}</p>
            </div>
            <div className="col">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-three-dots"
                    viewBox="0 0 16 16"
                >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
            </div> */}
        </div>
    );
};

export default TicketCard;
