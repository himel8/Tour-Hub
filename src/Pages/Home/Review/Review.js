import React from "react";
import { Link } from "react-router-dom";
import ReviewCard from "../../../Components/ReviewCard/ReviewCard";
import "./Review.css";

const data = [
  {
    title: "TOURS IN PARIS",
    name: "jahid islam",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ipsa ducimus labore perferendis reiciendis quasi.",
    price: 1000,
    rating: 5,
    img: "https://i.ibb.co/nck2ZQS/Paris.jpg",
  },
  {
    title: "TOURS IN MOSCOW",
    name: "borhan ahmed himel",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ipsa ducimus labore perferendis reiciendis quasi.",
    price: 1500,
    rating: 4.5,
    img: "https://i.ibb.co/Kr1gJdD/Moscow.jpg",
  },
  {
    title: "TOURS IN NEW YORK",
    name: "ryhan hossain rahat",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ipsa ducimus labore perferendis reiciendis quasi.",
    price: 2000,
    rating: 4.67,
    img: "https://i.ibb.co/883cyLp/New-York.jpg",
  },
];
const Review = () => {
  return (
    <div className="pb-12 px-12">
      <h1 className="text-4xl text-center font-bold tracking-wider mb-10">
        WHAT OUR CLIENTS SAY
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mx-28 sm:mx-14 mx-7 gap-2 sm:gap-4 md:gap-10">
        {data.map((data) => (
          <ReviewCard data={data} />
        ))}
      </div>
      <div className="flex justify-center my-8">
        <Link to="/review">
          <button className="bg-gradient-to-r from-emerald-500 to-lime-500 text-lg text-white font-semibold py-2 px-12 rounded-full  hover:opacity-90 duration-500">
            See more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Review;
