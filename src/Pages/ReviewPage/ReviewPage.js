import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://tourhub123.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="pb-12 px-12">
        <h1 className="text-4xl text-center font-bold tracking-wider mb-10">
          WHAT OUR CLIENTS SAY
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mx-28 sm:mx-14 mx-7 gap-2 sm:gap-4 md:gap-10">
          {reviews.map((data) => (
            <ReviewCard data={data} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReviewPage;
