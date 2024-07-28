import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/footer/footer";

const Pricingpage = () => {
  const tiers = [
    { name: "Basic", price: 0, description: "Basic plan for starting" },
    {
      name: "Premium",
      price: 10,
      description: "Premium plan for advanced users",
    },
    {
      name: "Enterprise2",
      price: 20,
      description: "Enterprise plan for large organizations",
    },
  ];

  return (
    <div className="pricing">
      <Navbar />
      <section style={{ marginTop: "150px" }} className="mb-5">
        <div>
          <h1>Pricing Page</h1>
          <ul>
            {tiers.map((tier) => (
              <li key={tier.name}>
                <h2>{tier.name}</h2>
                <p>Price: ${tier.price}</p>
                <p>{tier.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="my-5"></section>
      <section className="my-5">
        <Footer />
      </section>
    </div>
  );
};

export default Pricingpage;
