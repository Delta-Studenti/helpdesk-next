import React, { FC } from "react";



const IssueHeader: FC = () => {

    return (
        <>
            <div className="d-flex flex-column flex-md-row align-items-center ">
                <h2>Ticket title<span className="text-muted"> #ticketID</span></h2>

                <div className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <a className="btn btn-sm btn-outline-secondary" href="#">Nový problém</a>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <h5><span className="badge rounded-pill bg-success px-2">Otevřeno</span></h5>
                <h6 className="px-2">ivanschuetz opened this issue sometime ago · 0 comments</h6>
            </div>
        </>
    );
};

export { IssueHeader };