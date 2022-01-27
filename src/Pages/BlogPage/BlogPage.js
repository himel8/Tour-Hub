import React, { useEffect, useState } from "react";
import BlogCard from "../../Components/BlogCard/BlogCard";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://tourhub123.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="pb-12 px-12">
        <h1 className="text-4xl text-center font-bold tracking-wider mb-10">
          Latest Blog
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mx-28 sm:mx-14 mx-7 gap-2 sm:gap-4 md:gap-10">
          {blogs.map((data) => (
            <BlogCard data={data} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
