import React from "react";
import { Link } from "react-router-dom";

const CustomCard = ({ data }) => {
  const { name, price, img, desc } = data;
  return (
    <div className="max-w-md mx-auto mt-4 md:mt-0 sm:mt-0 bg-white rounded-md shadow-md overflow-hidden ">
      <div className="">
        <div className="w-full h-48 overflow-hidden object-contain">
          <img
            className="w-full	h-full p-0 m-0 rounded-lg scale-100 transform hover:scale-150 transition duration-300"
            src={img}
            alt="Man looking at item at a store"
          />
        </div>
        <div className="p-2">
          <p className="mt-2 capitalize text-2xl leading-tight font-bold text-black ">
            {name}
          </p>
          <p className="my-2 capitalize text-md  font-normal text-gray-700 ">
            {desc}
          </p>
          <div className="flex items-center justify-between my-4">
            <Link to={`/tour/${name}`}>
              <button className="bg-gradient-to-r from-emerald-500 to-lime-500 text-lg text-white font-semibold py-2 px-6 rounded-full  hover:opacity-90 duration-500">
                Book Now
              </button>
            </Link>
            <p className="text-slate-900 text-xl font-semibold">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
