import React from "react";

const TestimonialCard = ({ client }) => {
  const avatarStyle = {
    verticalAlign: "middle",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  };

  return (
    <div className="col-md-4 card p-4 m-2" style={{ maxWidth: "25rem" }}>
      <div className="card-body">
        <p className="text-secondary card-text">{client.testimonial}</p>
        <div className="d-flex card-footer border-0">
          <div className="me-3">
            <img style={avatarStyle} src={client.avatar} alt="" />
          </div>
          <div className="card-text">
            <h6 style={{ color: "#1CC7C1" }}>{client.name}</h6>
            <small className="text-secondary">{client.address}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
