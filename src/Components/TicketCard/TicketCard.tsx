import Link from "next/link";
import React from "react";
import { ticket } from "../../types/ticket";

const TicketCard: React.FC = (props: ticket) => {
    return (
        <div className="d-flex flex-row align-items-start p-4 shadow-lg rounded bg-body rounded-3 m-4">
            <div className="col">
                <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                />
            </div>
            <div className="col d-flex flex-row gap-1">
                <p>{props.ticket.user.firstName}</p>
                <p>{props.ticket.user.lastName}</p>
            </div>
            <div className="col">
                <p>#{props.ticket.id}</p>
            </div>
            <div className="col">
                <p>#{props.ticket.title}</p>
            </div>
            <div className="col">
                <span
                    className={`badge 
                    ${
                        props.ticket.status == "Otevřený"
                            ? "bg-warning"
                            : "bg-secondary"
                    }
                    ${
                        props.ticket.status == "Vyřešený"
                            ? "bg-success"
                            : "bg-secondary"
                    }
                    `}
                >
                    {props.ticket.status}
                </span>
            </div>
        </div>
    );
};

export default TicketCard;
