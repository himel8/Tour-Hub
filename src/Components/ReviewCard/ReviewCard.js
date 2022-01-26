import React from "react";
import Rating from "react-rating";

const ReviewCard = ({ data }) => {
  const { title, name, desc, rating } = data;
  return (
    <div className="p-3 max-w-md mx-auto mt-4 md:mt-0 sm:mt-0 bg-white rounded-md shadow-lg overflow-hidden ">
      <div className="text-center">
        <div className="custom-icon">
          <Rating
            className="border-1 border-green-800"
            initialRating={rating}
            emptySymbol={<ion-icon name="star-outline"></ion-icon>}
            fullSymbol={<ion-icon name="star-sharp"></ion-icon>}
            readonly
          />{" "}
        </div>
        <div className="p-2">
          <p className="mt-2 capitalize text-2xl leading-tight font-bold text-black ">
            {title}
          </p>
          <p className="my-2 capitalize text-md  font-normal text-gray-700 ">
            {desc}
          </p>
          <p className="mt-2 capitalize text-xl leading-tight font-semibold text-black ">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
