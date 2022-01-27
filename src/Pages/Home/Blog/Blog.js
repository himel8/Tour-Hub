import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../../Components/BlogCard/BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://tourhub123.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="pb-12 px-12">
      <h1 className="text-4xl text-center font-bold tracking-wider mb-10">
        Latest Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mx-28 sm:mx-14 mx-7 gap-2 sm:gap-4 md:gap-10">
        {blogs.slice(0, 3).map((data) => (
          <BlogCard data={data} />
        ))}
      </div>
      <div className="flex justify-center my-8">
        <Link to="/blog">
          <button className="bg-gradient-to-r from-emerald-500 to-lime-500 text-lg text-white font-semibold py-2 px-12 rounded-full  hover:opacity-90 duration-500">
            See more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
