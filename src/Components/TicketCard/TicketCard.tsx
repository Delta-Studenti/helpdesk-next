import Link from "next/link";
import React, {FC} from "react";

const TicketCard : FC = () => {
  return (
    <>
      <div className="col">
        <div className="row pb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Nefunkční Firewall</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Autor: Michal Maděra
              </h6>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                soluta, nisi nemo ipsum error, distinctio aliquid ab quidem
                omnis aspernatur sit odit expedita earum debitis vero
                consequuntur similique, facilis ipsam.
              </p>
              <span className="badge rounded-pill bg-danger">Urgentní</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
