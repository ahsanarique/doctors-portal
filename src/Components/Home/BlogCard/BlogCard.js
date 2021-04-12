import React from "react";

const BlogCard = ({ blog }) => {
  const avatarStyle = {
    verticalAlign: "middle",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  };

  return (
    <div style={{ width: "20rem" }} className="col-md-4 card p-4 m-2">
      <div className="d-flex card-header border-0">
        <div className="me-3">
          <img style={avatarStyle} src={blog.avatar} alt="" />
        </div>
        <div className="card-text">
          <h6 style={{ color: "#1CC7C1" }}>{blog.writer}</h6>
          <small className="text-secondary">{blog.date}</small>
        </div>
      </div>
      <div className="card-body">
        <h4>{blog.title}</h4>
        <p>{blog.summary}</p>
      </div>
    </div>
  );
};

export default BlogCard;
