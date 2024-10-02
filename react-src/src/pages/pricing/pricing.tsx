import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/footer/footer";
import { Row, Col } from "react-bootstrap";
import PriceCard from "./components/priceCard/priceCard";
import "./pricing.css";

const Pricingpage = () => {
  const tiers = [
    {
      name: "Basic Plan",
      context_title: "Starter Package",
      base_price: 3.99,
      features: ["10 GB Storage", "24/7 Support", "Free Updates"],
    },
    {
      name: "Pro Plan",
      context_title: "Professional Package",
      base_price: 5.99,
      features: [
        "100 GB Storage",
        "Priority Support",
        "Custom Domain",
        "Advanced Analytics",
      ],
    },
    {
      name: "Enterprise Plan",
      context_title: "Business Package",
      base_price: 9.99,
      features: [
        "Unlimited Storage",
        "Dedicated Support",
        "Custom Branding",
        "Enterprise-level Security",
        "Advanced Integrations",
      ],
    },
  ];

  let [client_count, setClient_count] = useState(1);
  let [prices, setPrices] = useState<number[]>([
    tiers[0].base_price,
    tiers[1].base_price,
    tiers[2].base_price,
  ]);

  const onHandleIncrement = () => {
    setClient_count((prevCount) => {
      const newCount = prevCount + 1;
      setPrices(calculatePrices(newCount, "+"));
      return newCount;
    });
  };

  const onHandleDecrement = () => {
    setClient_count((prevCount) => {
      const newCount = Math.max(prevCount - 1, 1);
      setPrices(calculatePrices(newCount, "-"));
      return newCount;
    });
  };

  const calculatePrices = (factor: number, operator: string) => {
    if (operator == "+") {
      return prices.map((price, index) =>
        parseFloat((price + tiers[index].base_price).toFixed(2))
      );
    } else if (operator == "-") {
      if (client_count > 1) {
        return prices.map((price, index) =>
          parseFloat((price - tiers[index].base_price).toFixed(2))
        );
      }
      return prices;
    } else {
      console.log("Unknown action");
      return prices;
    }
  };

  return (
    <div className="App pricing">
      <Navbar />
      <section style={{ marginTop: "175px" }} className="mb-5">
        <Row className="mb-5 ">
          <div
            className="text-md-start text-center d-flex flex-md-row flex-column "
            style={{}}
          >
            <Col className="d-flex align-items-center">
              <h1 className="ms-md-5 mb-5 mb-md-0">
                <strong>
                  Pick your{" "}
                  <span style={{ color: "rgb(0, 166, 162)" }}>
                    perfect plan
                  </span>
                </strong>
              </h1>
            </Col>
            <Col className="d-flex flex-xxl-row flex-column justify-content-between align-items-center p-4 mx-5">
              <div className="d-flex flex-xxl-row flex-column mb-4 mb-xxl-0 align-items-center">
                <label
                  htmlFor="number-of-channels"
                  className="form-label h6 mb-2 mb-xxl-0 me-xxl-3 text-nowrap mx-3 pricing-label"
                >
                  Select number of clients:
                </label>
                <div className="input-group me-3">
                  <button
                    className="input-group-text btn btn-outline-secondary pricing-select-clients-btn"
                    id="decrement"
                    onClick={onHandleDecrement}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="form-control text-center pricing-channel-input"
                    id="number-of-channels"
                    value={client_count}
                  />
                  <button
                    className="input-group-text btn btn-outline-secondary pricing-select-clients-btn"
                    id="increment"
                    onClick={onHandleIncrement}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="d-flex flex-xxl-row flex-column align-items-center mx-3">
                <label className="form-label h6 mb-2 mb-xxl-0 me-xxl-3 text-nowrap pricing-label">
                  Select billing cycle:
                </label>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Billing Cycle"
                >
                  <input
                    type="radio"
                    className="btn-check "
                    name="billingCycle"
                    id="monthly"
                    autoComplete="off"
                    checked
                  />
                  <label className="btn  pricing-btn-radio" htmlFor="monthly">
                    Monthly
                  </label>
                  <input
                    type="radio"
                    className="btn-check x"
                    name="billingCycle"
                    id="yearly"
                    autoComplete="off"
                  />
                  <label className="btn  pricing-btn-radio" htmlFor="yearly">
                    Yearly
                  </label>
                </div>
              </div>
            </Col>
          </div>
        </Row>

        <Row className="mx-4 my-5 p-5 pt-0">
          {tiers.map((item, index) => (
            <PriceCard
              key={index}
              name={item.name}
              context_title={item.context_title}
              base_price={prices[index]}
              features={item.features}
              client_count={client_count}
            />
          ))}
        </Row>
      </section>

      <section className="my-5">
        <Footer />
      </section>
    </div>
  );
};

export default Pricingpage;
