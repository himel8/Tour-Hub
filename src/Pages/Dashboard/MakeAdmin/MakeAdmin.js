import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const MakeAdmin = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [newAdmin, setNewAdmin] = useState({});
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const userData = { ...newAdmin };
    userData[field] = value;
    setNewAdmin(userData);
  };
  const handleRegister = (e) => {
    fetch(`https://tourhub123.herokuapp.com/users/admin/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAdmin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Admin added successfully");
          navigate("/dashboard/");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h3 className="text-4xl">Make an Admin</h3>
      <form onSubmit={handleRegister} action="" className="mt-6">
        <div className="my-5 text-sm">
          <input
            type="email"
            id="email"
            name="email"
            onBlur={handleBlur}
            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Type User Email"
          ></input>
        </div>
        <button className="block text-xl text-center text-white bg-gradient-to-r from-emerald-500 to-lime-500 p-3 duration-300 rounded-sm hover:bg-black w-full">
          Make an Admin
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;
