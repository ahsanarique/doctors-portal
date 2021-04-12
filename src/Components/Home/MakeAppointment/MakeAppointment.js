import React from "react";
import "./MakeAppointment.css";
import doctor from "../../../images/doctor.png";

const MakeAppointment = () => {
  return (
    <section className="make-appointment">
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-md-6 ">
            <img className="img-fluid" src={doctor} alt="" />
          </div>
          <div className="col-md-6 text-white py-5">
            <h6 className="text-primary text-uppercase">Appointment</h6>
            <h2 className="my-4">
              Make an Appointment <br /> Today
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              sed eveniet tempora distinctio accusamus veniam at quae aut rem
              repudiandae!
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
