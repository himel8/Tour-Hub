import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./ReviewCheck.css";

const ReviewCheck = ({ data }) => {
  const [isReview, setIsReview] = useState({});
  useEffect(() => {
    fetch(`https://tourhub123.herokuapp.com/reviews/${data._id}`)
      .then((res) => res.json())
      .then((data) => setIsReview(data));
  }, [data._id]);
  return (
    <div>
      {isReview.rating ? (
        <Rating
          className="reviewCheck"
          initialRating={isReview.rating}
          emptySymbol={<ion-icon name="star-outline"></ion-icon>}
          fullSymbol={<ion-icon name="star-sharp"></ion-icon>}
          readonly
        />
      ) : (
        <Link to={`/dashboard/addreview/${data._id}`}>
          <button className="block text-xl text-center text-white bg-gradient-to-r from-emerald-500 to-lime-500 p-2 duration-300 rounded-sm hover:bg-black w-full">
            Review
          </button>
        </Link>
      )}
    </div>
  );
};

export default ReviewCheck;
