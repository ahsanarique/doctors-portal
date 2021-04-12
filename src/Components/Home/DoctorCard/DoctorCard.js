import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const DoctorCard = ({ doctor }) => {
  const phoneIcon = <FontAwesomeIcon icon={faPhone} color="#1CC7C1" />;

  return (
    <div style={{ maxWidth: "20rem" }} className="col-md-4 card p-4 m-2">
      <div>
        <img className="card-img" src={doctor.image} alt="" />
      </div>
      <div className="card-text text-center mt-4">
        <h6>{doctor.name}</h6>
        <small className="text-secondary">
          <span className="me-2">{phoneIcon}</span> {doctor.contact}
        </small>
      </div>
    </div>
  );
};

export default DoctorCard;
