import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const SingleTourPage = () => {
  const [plan, setPlan] = useState([]);

  const { planId } = useParams();

  useEffect(() => {
    fetch(`https://tourhub123.herokuapp.com/services/${planId}`)
      .then((res) => res.json())
      .then((data) => setPlan(data));
  }, [planId]);

  return (
    <div>
      <Navbar />

      {plan.map((data) => (
        <div key={data._id} className="md:w-4/5 mx-auto my-4 w-11/12 md:my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-1">
            <div>
              <img src={data.img} alt="" />
            </div>
            <div>
              <h1 className="text-4xl font-semibold">{data.name}</h1>
              <p className="text-lg my-4">{data.desc}</p>
              <p className="text-2xl my-4 font-bold capitalize ">
                price: ${data.price}
              </p>
              <Link to={`/dashboard/book/${data.name}`}>
                <button className="bg-gradient-to-r from-emerald-500 to-lime-500 text-lg text-white font-semibold py-2 px-6 rounded-full  hover:opacity-90 duration-500">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          <div className="my-4 md:my-8">
            <h1 className="text-4xl font-semibold text-center">
              See all Reviews
            </h1>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default SingleTourPage;
