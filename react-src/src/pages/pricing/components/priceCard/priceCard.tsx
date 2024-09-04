import React from "react";
import "./priceCard.css";

interface Props {
  name: string;
  context_title: string;
  base_price: number;
  features: string[];
  client_count: number;
}

const PriceCard: React.FC<Props> = ({
  name,
  context_title,
  base_price,
  features,
  client_count,
}) => {
  return (
    <div className="col-lg-4 my-md-0 my-3 px-4">
      <div className="card mb-5 mb-lg-0 h-100 ">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title pricing-card-title text-uppercase text-center mb-4">
            {name}
          </h5>
          <h5 className="text-center pricing-card-title-sub">
            {context_title}
          </h5>
          <h6 className="card-price text-center my-4 py-2">
            £{base_price}
            <span className="period">
              / month for <span className="client-amount">{client_count}</span>{" "}
              {client_count > 1 ? "clients" : "client"}
            </span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {features.map((item, index) => (
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="d-grid d-flex justify-content-center mt-auto ">
            <a
              href="#"
              className="btn btn-primary pricing-btn text-uppercase p-3 "
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
