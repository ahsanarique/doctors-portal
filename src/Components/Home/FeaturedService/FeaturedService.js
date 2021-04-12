import React from "react";
import featuredService from "../../../images/featuredService.png";

const FeaturedService = () => {
  return (
    <section className="card mb-3 m-5" style={{ maxWidth: "1200px" }}>
      <div className="row g-0 d-flex align-items-center">
        <div className="col-md-4">
          <img className="w-100 m-2" src={featuredService} alt="..." />
        </div>
        <div className="col-md-7">
          <div className="card-body mx-3">
            <h2 className="card-title">
              Exceptional Dental <br /> Care, on Your Terms
            </h2>

            <p className="card-text text-secondary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              ad, nobis cupiditate officiis molestiae ea minima delectus sed cum
              voluptatem sint quaerat alias molestias provident omnis
              voluptatibus nesciunt sapiente! Dignissimos aspernatur a minus,
              voluptates hic explicabo fuga, adipisci sunt, harum ratione facere
              quod perferendis obcaecati. Odit sit quidem sint nemo.
            </p>

            <button className="btn btn-primary mt-3">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
