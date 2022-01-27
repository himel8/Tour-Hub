import React, { useEffect, useState } from "react";
import CustomCard from "../../Components/CustomCard/CustomCard";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const Plans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("https://tourhub123.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="py-12 px-12">
        <h1 className="text-4xl text-center font-bold tracking-wider mb-10">
          POPULAR TOURS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mx-28 sm:mx-14 mx-7 gap-2 sm:gap-4 md:gap-10">
          {plans.map((data) => (
            <CustomCard data={data} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plans;
