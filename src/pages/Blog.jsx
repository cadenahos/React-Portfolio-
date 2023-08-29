import React from "react";
import PropTypes from "prop-types";
import { getBlog } from "../Api/lib/blog";
const Blog = () => {
  const [blog, setBlog] = React.useState([]);
  React.useEffect(() => {
    getBlog().then((response) => {
      setBlog(response.data);
      console.log(response.data);
    });
  }, []);
  return <div></div>;
};

Blog.propTypes = {};

export default Blog;
