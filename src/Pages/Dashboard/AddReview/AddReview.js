import React, { useState } from "react";

const AddReview = () => {
  const [newReview, setNewReview] = useState({});
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const userData = { ...newReview };
    userData[field] = value;
    setNewReview(userData);
  };
  const handleRegister = (e) => {
    console.log(newReview);
    e.preventDefault();
  };
  return (
    <div>
      <h3 className="text-4xl">Add a review</h3>
      <form onSubmit={handleRegister} action="" className="mt-6">
        <div className="my-5 text-sm">
          <input
            type="text"
            id="name"
            name="name"
            onBlur={handleBlur}
            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Type Service name"
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
            placeholder="Type service details"
          ></textarea>
        </div>
        <div className="my-5 text-sm">
          <input
            type="number"
            id="rating"
            name="rating"
            onBlur={handleBlur}
            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Type service Rating"
          ></input>
        </div>

        <button className="block text-xl text-center text-white bg-gradient-to-r from-emerald-500 to-lime-500 p-3 duration-300 rounded-sm hover:bg-black w-full">
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
