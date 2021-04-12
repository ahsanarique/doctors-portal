import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FeaturedBlogCard = ({ featured }) => {
  const quoteIcon = (
    <FontAwesomeIcon icon={faQuoteLeft} size="7x" color="white" opacity="0.2" />
  );

  const featuredQuoteStyle = {
    backgroundColor: "#1CC7C1",
    width: "20rem",
    opacity: "0.7",
  };

  const arrowIcon = (
    <FontAwesomeIcon icon={faArrowRight} size="3x" color="white" />
  );

  return (
    <div
      className="col-md-4 card p-4 m-2 text-white"
      style={featuredQuoteStyle}
    >
      <div style={{ position: "absolute" }}>
        <h6>{featured.writer}</h6>
        <small>{featured.date}</small>
        <h3 className="my-3">{featured.title}</h3>
      </div>
      <div className="ms-auto">
        <h4>{quoteIcon}</h4>
      </div>
      <div className="card-footer border-0 mt-4">{arrowIcon}</div>
    </div>
  );
};

export default FeaturedBlogCard;
