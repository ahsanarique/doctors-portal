import React from "react";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const serviceData = [
  {
    name: "Fluoride Treatment",
    image: fluoride,
  },
  {
    name: "Cavity Filling",
    image: cavity,
  },
  {
    name: "Teeth Whitening",
    image: whitening,
  },
];

const Services = () => {
  return (
    <section className="services-container">
      <div className="text-center my-5">
        <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row py-5">
          {serviceData.map((service) => (
            <ServiceDetail service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
