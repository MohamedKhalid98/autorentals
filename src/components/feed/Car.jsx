import React from "react";
import "./Car.scss";
const Car = ({ data }) => {
  return (
    <div className="card mb-3 border-0 text-dark bg-light shadow">
      <div className="row no-gutters car-card">
        <div className="offset-4 col-md-8">
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-between">
              <div className="">
                <span className="name">{data.brand.name} </span>
                {data.model.name}
              </div>
              <small className="font-weight-bold">{data.model.year}</small>
            </h5>
            <p className="card-text">{data.model.type.name}</p>
            <div className="card-text d-flex justify-content-between">
              <h6 className="mb-0">
                <b className="badge badge-dark ">{data.sellerType}</b>
              </h6>
              <div className="mb-0 h4 font-weight-light">${data.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
