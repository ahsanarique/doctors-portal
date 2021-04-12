import React from "react";
import avatar1 from "../../../images/avatar-1.png";
import avatar2 from "../../../images/avatar-2.png";
import avatar3 from "../../../images/avatar-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const testimonialData = [
  {
    name: "Winson Henry",
    avatar: avatar1,
    address: "California",
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores velit esse facilis commodi nam nobis voluptatem deleniti quae provident blanditiis, eligendi, cum animi, omnis suscipit molestiae. Quaerat distinctio minus nulla.",
  },
  {
    name: "Winson Henry",
    avatar: avatar2,
    address: "California",
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores velit esse facilis commodi nam nobis voluptatem deleniti quae provident blanditiis, eligendi, cum animi, omnis suscipit molestiae. Quaerat distinctio minus nulla.",
  },
  {
    name: "Winson Henry",
    avatar: avatar3,
    address: "California",
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores velit esse facilis commodi nam nobis voluptatem deleniti quae provident blanditiis, eligendi, cum animi, omnis suscipit molestiae. Quaerat distinctio minus nulla.",
  },
];

const Testimonials = () => {
  const quoteIcon = (
    <FontAwesomeIcon
      icon={faQuoteLeft}
      size="7x"
      color="#1CC7C1"
      opacity="0.2"
    />
  );

  return (
    <section style={{ maxWidth: "100rem" }} className="card my-5 border-0">
      <div className="card-body">
        <div className="d-flex">
          <div>
            <h6 className="card-title" style={{ color: "#1CC7C1" }}>
              TESTIMONIAL
            </h6>
            <h2 className="card-subtitle">
              What Our Patients <br /> Say
            </h2>
          </div>
          <div className="ms-auto">
            <h4>{quoteIcon}</h4>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          {testimonialData.map((client) => (
            <TestimonialCard client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
