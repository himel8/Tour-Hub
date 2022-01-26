import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 md:mx-10 sm:mx-5 mx-2 gap-2 sm:gap-4 md:gap-6">
      <div className="col-span-2">
        <Link to="/">
          <div className=" font-bold text-3xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <span className="text-3xl mr-2 pt-2 text-emerald-400 ">
              <ion-icon name="bed-outline"></ion-icon>
            </span>
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-emerald-500 to-lime-500 ">
              TourHub
            </span>
          </div>
        </Link>
        <div>
          <p className="my-2 text-lg text-black font-bold">Contact</p>
          <p className="text-md text-gray-600">
            <span className="font-semibold text-gray-800">Address:</span>{" "}
            Uttara, Dhaka, Bangladesh
          </p>
          <p className="text-md text-gray-600">
            <span className="font-semibold text-gray-800">Phone:</span>{" "}
            +8801516097150, +8801834274592
          </p>
          <p className="text-md text-gray-600">
            <span className="font-semibold text-gray-800">Hours:</span> 10.00 -
            18.00. Mon - Sat
          </p>
        </div>
        <div>
          <p className="mt-3 my-2 text-lg text-black font-bold">Follow Us</p>
          <div className="social-media">
            <Link to="/">
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
            <Link to="/">
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
            <Link to="/">
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
            <Link to="/">
              <ion-icon name="logo-pinterest"></ion-icon>
            </Link>
            <Link to="/">
              <ion-icon name="logo-youtube"></ion-icon>
            </Link>
          </div>
        </div>
      </div>
      {/* second column */}
      <div>
        <p className="mt-3 my-2 text-lg text-black font-bold">About</p>
        <Link to="/">
          <p className="hover:underline text-gray-600">About Us</p>
        </Link>
        <Link to="/">
          <p className="hover:underline text-gray-600">Delivery Information</p>
        </Link>
        <Link to="/">
          <p className="hover:underline text-gray-600">Privacy Policy</p>
        </Link>
        <Link to="/">
          <p className="hover:underline text-gray-600">Terms & Conditions</p>
        </Link>
        <Link to="/">
          <p className="hover:underline text-gray-600">Contact Us</p>
        </Link>
      </div>
      {/* Third column */}
      <div>
        <p className="mt-3 my-2 text-lg text-black font-bold">My Acount</p>
        <Link to="/">
          <p className="hover:underline text-gray-600">About Us</p>
        </Link>
        <Link to="/">
          <p className="hover:underline text-gray-600">Delivery Information</p>
        </Link>
        <Link to="/">
          <p className="hover:underline text-gray-600">Privacy Policy</p>
        </Link>
        <Link to="/">
          <p className="hover:underline text-gray-600">Terms & Conditions</p>
        </Link>
        <Link to="/">
          <p className="hover:underline text-gray-600">Contact Us</p>
        </Link>
      </div>
      {/* Fourth column */}
      <div className="col-span-2">
        <p className="mt-3 my-2 text-lg text-black font-bold">Install App</p>
        <p className="hover:underline text-gray-600 my-2">
          From App Store or Google Play
        </p>
        <img
          className=" w-full"
          src="https://i.ibb.co/3N5M0v6/upload-apps-to-android-play-store-ios-apple-store-push.jpg"
          alt=""
        />
        <p className="hover:underline text-gray-600 my-2">
          Secure Payment Gateways
        </p>
        <img
          className=" w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-8FQVw2Eoq7htJ000VnCSqZ3w36H1ZxjpIE50eCrYo1_jGET1COXVpcr-EwbABTbEg&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
