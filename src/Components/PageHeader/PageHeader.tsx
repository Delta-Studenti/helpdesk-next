import React, { FC } from "react";

const PageHeader: FC = () => {
  return (
    <>
      <div className="d-flex justify-content-around align-content-center flex-wrap">
        <div className="d-flex">
          <h2 className="pb-2 border-bottom float-left">Všechny tikety</h2>
          <h6 className="d-flex card-subtitle mb-2 text-muted align-items-center px-2">9 celkem</h6>
        </div>
        <div></div>
        <div className="d-flex align-content-center flex-wrap btn-group">
          <button type="button" className="btn btn-light btn-sm">
            Filtr
          </button>
          <button type="button" className="btn btn-primary btn-sm">
            Vytvořit tikety
          </button>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
