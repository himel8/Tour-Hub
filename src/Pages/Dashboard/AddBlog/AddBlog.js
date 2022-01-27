import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const AddBlog = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const uniqeValue = { name: user.displayName.split(" ")[0] };
  const [newBlog, setNewBlog] = useState(uniqeValue);
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const blogData = { ...newBlog };
    blogData[field] = value;
    setNewBlog(blogData);
  };
  const handleRegister = (e) => {
    fetch("https://tourhub123.herokuapp.com/blogs/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          alert("Blog added successfully");
          navigate("/blog");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h3 className="text-4xl">Add a Blog</h3>
      <form onSubmit={handleRegister} action="" className="mt-6">
        <div className="my-5 text-sm">
          <input
            type="text"
            id="name"
            name="name"
            onBlur={handleBlur}
            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            defaultValue={user.displayName.split(" ")[0]}
          ></input>
        </div>
        <div className="my-5 text-sm">
          <input
            type="text"
            id="title"
            name="title"
            onBlur={handleBlur}
            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Type Blog Title"
          ></input>
        </div>
        <div className="my-5 text-sm">
          <textarea
            type="text"
            rows={4}
            id="desc"
            name="desc"
            onBlur={handleBlur}
            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Type blog details"
          ></textarea>
        </div>
        <div className="my-5 text-sm">
          <input
            type="text"
            id="img"
            name="img"
            onBlur={handleBlur}
            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Type blog image link"
          ></input>
        </div>

        <button className="block text-xl text-center text-white bg-gradient-to-r from-emerald-500 to-lime-500 p-3 duration-300 rounded-sm hover:bg-black w-full">
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
