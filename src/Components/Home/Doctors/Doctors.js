import React from "react";
import doctor from "../../../images/doctor.png";
import DoctorCard from "../DoctorCard/DoctorCard";

const doctorData = [
  {
    name: "Dr. Caudi",
    image: doctor,
    contact: "+61 452 200 126",
  },
  {
    name: "Dr. Caudi",
    image: doctor,
    contact: "+61 452 200 126",
  },
  {
    name: "Dr. Caudi",
    image: doctor,
    contact: "+61 452 200 126",
  },
];

const Doctors = () => {
  return (
    <section style={{ maxWidth: "100rem" }} className="card my-5 border-0">
      <div className="text-center m-3">
        <h6 style={{ color: "#1CC7C1" }}>Our Doctors</h6>
      </div>
      <div className="card-body m-3">
        <div className="row d-flex justify-content-center">
          {doctorData.map((doctor) => (
            <DoctorCard doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
