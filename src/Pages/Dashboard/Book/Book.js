import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Book = () => {
  const navigate = useNavigate();

  const [serviceId, setServiceId] = useState({});
  const { user } = useAuth();
  const { bookId } = useParams();

  useEffect(() => {
    fetch(`https://tourhub123.herokuapp.com/services/${bookId}`)
      .then((res) => res.json())
      .then((data) => setServiceId(data[0]));
  }, [bookId]);

  const initialInfo = {
    name: user.displayName,
    email: user.email,
    serviceName: bookId,
    Arrival: "",
    deprature: "",
  };
  const [newBook, setNewBook] = useState(initialInfo);
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const userData = { ...newBook };
    userData[field] = value;
    setNewBook(userData);
  };
  const handleRegister = (e) => {
    fetch("https://tourhub123.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          alert("order added successfully");
          navigate("/dashboard/");
        }
      });
    e.preventDefault();
    console.log(newBook);
  };

  return (
    <div>
      <h3 className="text-4xl">Book a package</h3>

      <form onSubmit={handleRegister} action="" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <div>
            <img src={serviceId.img} alt="" />
          </div>
          <div>
            <p className="text-lg">{serviceId.desc}</p>
          </div>
        </div>
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
            disabled
            type="text"
            id="serviceName"
            name="serviceName"
            onBlur={handleBlur}
            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            defaultValue={serviceId.name}
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
              <span className="text-md font-semibold">Deprature</span>
              <input
                type="date"
                id="deprature"
                name="deprature"
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
