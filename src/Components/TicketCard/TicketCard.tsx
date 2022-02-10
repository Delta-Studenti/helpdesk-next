import Link from "next/link";
import React from "react";
import { ticket } from "../../types/ticket";

const TicketCard: React.FC = (props: ticket) => {
    const createdAt = new Date(props.ticket.createdAt).toLocaleDateString();
    console.log(createdAt);
    return (
        <div className="d-flex flex-row align-items-center justify-content-between p-4 shadow-lg rounded bg-body rounded-3 m-4">
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
                <p>{props.ticket.title}</p>
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
            </div>
        </div>
    );
};

export default TicketCard;
