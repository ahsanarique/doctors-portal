import React from "react";
import appointment from "../../../images/appointment.png";

const Contact = () => {
  const contactFormStyle = {
    backgroundColor: "#41495C",
    maxWidth: "80vw",
  };

  const imageBg = {
    backgroundImage: `url(${appointment})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "80vw",
    height: "35rem",
    opacity: "0.1",
  };

  return (
    <section style={contactFormStyle} className="card mt-5 border-0">
      <div style={imageBg} className="card-img"></div>

      <div className="card-body card-img-overlay my-3">
        <div className="card-text text-center">
          <h6 style={{ color: "#1CC7C1" }} className="card-subtitle">
            Contact Us
          </h6>
          <h3 className="card-title text-white">Stay Connected With Us</h3>
        </div>

        <div className="m-5">
          <div class="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Subject" />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
