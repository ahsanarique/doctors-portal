import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import FeaturedBlogCard from "../FeaturedBlogCard/FeaturedBlogCard";
import avatar1 from "../../../images/avatar-1.png";
import avatar2 from "../../../images/avatar-2.png";

const blogCardData = [
  {
    writer: "Dr. Caudi",
    avatar: avatar1,
    title: "2 times of brush in a day can keep you healthy",
    date: new Date().toDateString(),
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus alias id expedita blanditiis quae.",
  },
  {
    writer: "Dr. John Mitchel",
    avatar: avatar2,
    title: "The tooth cancer is taking a challenge",
    date: new Date().toDateString(),
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus alias id expedita blanditiis quae.",
  },
];

const featuredBlogCardData = [
  {
    writer: "Dr. John Mitchel",
    title: "Check at least a doctor in a year for your health",
    date: new Date().toDateString(),
    summary: "",
  },
];

const Blogs = () => {
  return (
    <section style={{ maxWidth: "100rem" }} className="card my-5 border-0">
      <div className="text-center m-3">
        <h6 style={{ color: "#1CC7C1" }} className="card-subtitle">
          Our Blogs
        </h6>
        <h2 className="card-title">From Our Blog News</h2>
      </div>
      <div className="card-body m-3">
        <div className="row d-flex justify-content-center">
          {featuredBlogCardData.map((featured) => (
            <FeaturedBlogCard featured={featured} />
          ))}
          {blogCardData.map((blog) => (
            <BlogCard blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
