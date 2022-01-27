import React, { useState } from "react";

const AddService = () => {
  const [newService, setNewService] = useState({});
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const userData = { ...newService };
    userData[field] = value;
    setNewService(userData);
  };
  const handleRegister = (e) => {
    console.log(newService);
    e.preventDefault();
  };
  return (
    <div>
      <h3 className="text-4xl">Add Service</h3>
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
          <input
            type="text"
            id="img"
            name="img"
            onBlur={handleBlur}
            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Type Service Image Link"
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
            id="price"
            name="price"
            onBlur={handleBlur}
            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Type service Price"
          ></input>
        </div>

        <button className="block text-xl text-center text-white bg-gradient-to-r from-emerald-500 to-lime-500 p-3 duration-300 rounded-sm hover:bg-black w-full">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
