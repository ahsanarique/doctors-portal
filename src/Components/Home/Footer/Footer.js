import React from "react";
import worldMap from "../../../images/worldmap.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const fbIcon = <FontAwesomeIcon icon={faFacebook} size="2x" />;
  const gPlusIcon = <FontAwesomeIcon icon={faGooglePlusG} size="2x" />;
  const twitterIcon = <FontAwesomeIcon icon={faTwitter} size="2x" />;

  const footerBgStyle = {
    maxWidth: "100vw",
  };

  const footerImgBgStyle = {
    backgroundImage: `url(${worldMap})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "40vh",
    opacity: "0.1",
  };

  const listStyle = {
    listStyleType: "none",
    padding: "0",
  };

  return (
    <section className="card border-0 mt-5" style={footerBgStyle}>
      <div style={footerImgBgStyle} className="card-img"></div>

      <div className="card-img-overlay container mt-5">
        <div className="row ">
          <div className=" col-md-3">
            <ul className="text-secondary" style={listStyle}>
              <li>Emergency Dental Care</li>
              <li>Check Up</li>
              <li>Check Up</li>
              <li>Tooth Extraction</li>
              <li>Check Up</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="mb-3" style={{ color: "#1CC7C1" }}>
              Services
            </h6>
            <ul className="text-secondary" style={listStyle}>
              <li>Emergency Dental Care</li>
              <li>Check Up</li>
              <li>Check Up</li>
              <li>Tooth Extraction</li>
              <li>Check Up</li>
              <li>Check Up</li>
              <li>Check Up</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="mb-3" style={{ color: "#1CC7C1" }}>
              Oral Health
            </h6>
            <ul className="text-secondary" style={listStyle}>
              <li>Emergency Dental Care</li>
              <li>Check Up</li>
              <li>Check Up</li>
              <li>Tooth Extraction</li>
              <li>Check Up</li>
              <li>Check Up</li>
              <li>Check Up</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="mb-3" style={{ color: "#1CC7C1" }}>
              Our Address
            </h6>
            <div>
              <small>New York- 101010 Hudson Yards</small>
            </div>
            <div className="mt-4">
              <a className="me-2" href="">
                {fbIcon}
              </a>
              <a className="mx-2" href="">
                {gPlusIcon}
              </a>
              <a className="ms-2" href="">
                {twitterIcon}
              </a>
            </div>
            <div className="mt-5">
              <p>Call Now</p>
              <button className="btn btn-primary">+2025550295</button>
            </div>
          </div>
        </div>

        <div className="text-secondary text-center mt-5">
          <small>
            Copyright {new Date().getFullYear().toString()} All Rights Reserved{" "}
          </small>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Footer;
