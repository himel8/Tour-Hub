import React from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import Slider from "../../../Components/Slider/Slider";
import Blog from "../Blog/Blog";
import Newslatter from "../Newslatter/Newslatter";
import PopularTour from "../PopularTour/PopularTour";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <PopularTour />
      <Review />
      <Blog />
      <Newslatter />
      <Footer />
    </div>
  );
};

export default Home;
