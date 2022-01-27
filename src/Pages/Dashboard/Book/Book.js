import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Book = () => {
  const { user } = useAuth();
  const { bookId } = useParams();
  const [newBook, setNewBook] = useState({});
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const userData = { ...newBook };
    userData[field] = value;
    setNewBook(userData);
  };
  const handleRegister = (e) => {
    console.log(newBook);
    e.preventDefault();
  };
  return (
    <div>
      <h3 className="text-4xl">Book a package</h3>
      <form onSubmit={handleRegister} action="" className="mt-6">
        <div className="my-5 text-sm">
          <input
            type="text"
            id="name"
            name="name"
            onBlur={handleBlur}
            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            defaultValue={user.displayName}
          ></input>
          <input
            type="text"
            id="email"
            name="email"
            onBlur={handleBlur}
            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            defaultValue={user.email}
          ></input>
          <input
            type="text"
            id="serviceName"
            name="serviceName"
            onBlur={handleBlur}
            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            defaultValue={bookId}
          ></input>
          <div className="flex justify-start my-2">
            <div className="w-1/2">
              <span className="text-md font-semibold">Arraival</span>
              <input
                type="date"
                id="Arrival"
                name="Arrival"
                onBlur={handleBlur}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Arrival"
              ></input>
            </div>
            <div className="w-1/2">
              <span className="text-md font-semibold">Arraival</span>
              <input
                type="date"
                id="Arrival"
                name="Arrival"
                onBlur={handleBlur}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Arrival"
              ></input>
            </div>
          </div>
        </div>

        <button className="block text-xl text-center text-white bg-gradient-to-r from-emerald-500 to-lime-500 p-3 duration-300 rounded-sm hover:bg-black w-full">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Book;
