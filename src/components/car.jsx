import React from "react";
import avatar from "../../src/IMG_0003.JPG";
const Car = ({ data }) => {
  return (
    <div className="card mb-3 border border-secondary text-dark bg-light shadow">
      <div className="row no-gutters car-card">
        <div className="col-md-4">
          <div className="text-center" style={{ fontSize: "100px" }}>
            <span role="img" aria-label="asd">
              {/* <img src={avatar} alt="" className="w-50" /> */}
            </span>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-between">
              {data.brand.name} ( {data.model.name} )
              <small>{data.model.year}</small>
            </h5>
            <p className="card-text">{data.model.type.name}</p>
            <div className="card-text d-flex justify-content-between">
              <h6 className="mb-0">
                <b className="badge badge-dark ">{data.sellerType}</b>
              </h6>
              <div className="mb-0 h2">${data.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
