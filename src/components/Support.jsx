import React from "react";
import { ReactComponent as IconCash } from "bootstrap-icons/icons/cash.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconDaily } from "bootstrap-icons/icons/calendar2.svg";

const Support = (props) => {
  return (
    <div className={`row g-3 ${props.className}`}>
      <div className="col-md-3">
        <div className="card bg-primary">
          <div className="card-body text-white">
            <span className="p-3 bg-light rounded-circle me-3 text-dark">
              <IconCash width={40} height={40} />
            </span>
            Reasonable prices
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-danger">
          <div className="card-body text-white">
            <span className="p-3 bg-light rounded-circle me-3 text-dark">
              <IconHeadset width={40} height={40} />
            </span>
            Customer support 24/7
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-warning">
          <div className="card-body text-white">
            <span className="p-3 bg-light rounded-circle me-3 text-dark">
              <IconDaily width={40} height={40} />
            </span>
            Daily Products
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-success">
          <div className="card-body text-white">
            <span className="p-3 bg-light rounded-circle me-3 text-dark">
              <IconTruck width={40} height={40} />
            </span>
            Quick delivery
          </div>
        </div>
      </div>
    </div>
  );
};
export default Support;
