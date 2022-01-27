import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navLink = [
    { name: "Home", link: "/" },
    { name: "Plans", link: "/plans" },
    { name: "About", link: "/help" },
    { name: "Blog", link: "/blog" },
    { name: "Review", link: "/review" },
  ];
  //   state declear
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full sticky top-0 left-0 z-50">
      <div
        className="
          md:flex items-center justify-between bg-white py-4 md:px-10 px-7"
      >
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
        <div className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden">
          <ion-icon
            onClick={() => setOpen(!open)}
            name={open ? "close" : "menu"}
          ></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:mb-0 mb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${
            open
              ? "top-0 opacity-100 mb-12 z-[1] relative"
              : "top-[-400px] opacity-0 md:opacity-100 z-[-2] "
          }`}
        >
          {navLink.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-lg font-semibold md:my-0 my-7"
            >
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          {user.email ? (
            <>
              <li className="md:ml-8 text-lg font-semibold md:my-0 my-7">
                <Link
                  to="/dashboard"
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {user?.displayName}
                </Link>
              </li>

              <button
                onClick={logOut}
                className="bg-gradient-to-r from-emerald-500 to-lime-500 text-lg text-white font-semibold py-2 px-6 rounded-full md:ml-8 hover:opacity-90 duration-500"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-gradient-to-r from-emerald-500 to-lime-500 text-lg text-white font-semibold py-2 px-6 rounded-full md:ml-8 hover:opacity-90 duration-500">
                Sign In
              </button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
