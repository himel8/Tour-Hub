import React from "react";
import { BsFillChatFill } from "react-icons/bs";

const BlogCard = ({ data }) => {
  const { title, name, img, desc, createdAt } = data;

  const d = new Date(createdAt);
  const date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
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
        <div className="flex items-center justify-between mx-3 mt-2 custom-blog">
          <p className="bg-gradient-to-r text-transparent bg-clip-text from-emerald-500 to-lime-500">
            <ion-icon name="calendar"></ion-icon>{" "}
            <span>{date.split(",")[1]}</span>
          </p>
          <p className="bg-gradient-to-r text-transparent bg-clip-text from-emerald-500 to-lime-500">
            <ion-icon name="person"></ion-icon>{" "}
            <span>{name.split(" ")[0]}</span>
          </p>
          <p className="flex items-center justify-start">
            <BsFillChatFill
              style={{ color: "lightseagreen", marginRight: "3px" }}
            />
            <span>5</span>
          </p>
        </div>
        <div className="py-3 px-3">
          <p className="mt-2 capitalize text-2xl leading-tight font-bold text-black ">
            {title}
          </p>
          <p className="my-2 capitalize text-md  font-normal text-gray-700 ">
            {desc}
          </p>
          <div className="text-center my-4">
            <button className="bg-gradient-to-r from-emerald-500 to-lime-500 text-lg text-white font-semibold py-2 px-6 rounded-full  hover:opacity-90 duration-500">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
