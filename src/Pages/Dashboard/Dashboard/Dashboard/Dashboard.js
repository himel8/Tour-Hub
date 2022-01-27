import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import AddBlog from "../../AddBlog/AddBlog";
import AddReview from "../../AddReview/AddReview";
import AddService from "../../AddService/AddService";
import Book from "../../Book/Book";
import MakeAdmin from "../../MakeAdmin/MakeAdmin";
import ManageOrder from "../../ManageOrder/ManageOrder";
import OrderList from "../../OrderList/OrderList";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const { admin, user } = useAuth();
  return (
    <div class="relative min-h-screen md:flex">
      {/* <!-- mobile menu bar --> */}
      <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        {/* <!-- logo --> */}
        <Link to="/" class="block p-4 text-white font-bold">
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-emerald-500 to-lime-500 ">
            TourHub
          </span>
        </Link>

        {/* <!-- mobile menu button --> */}
        <div className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden">
          <ion-icon
            onClick={() => setOpen(!open)}
            name={open ? "close" : "menu"}
          ></ion-icon>
        </div>
      </div>

      {/* <!-- sidebar --> */}
      <div
        class={`${
          !open ? "-translate-x-full" : "translate-x-0	"
        }sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 pl-4 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        {/* <!-- logo --> */}
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

        {/* <!-- nav --> */}
        <nav>
          <ul className="">
            <li className="py-2 font-semibold hover:underline">
              <Link to="/dashboard/addservice">Add Service</Link>
            </li>
            <li className="py-2 font-semibold hover:underline">
              <Link to="/dashboard/">Booking List</Link>
            </li>
            <li className="py-2 font-semibold hover:underline">
              <Link to="/dashboard/makeadmin">Make Admin</Link>
            </li>
            <li className="py-2 font-semibold hover:underline">
              <Link to="/dashboard/manageorder">Manage Orders</Link>
            </li>
            <li className="py-2 font-semibold hover:underline">
              <Link to="/dashboard/addblog">Add Blog</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* <!-- content --> */}
      <div class="flex-1 p-2 md:p-10 ">
        <div className="flex justify-between border-b pb-8 mb-4">
          <div className="center">
            <h4 className="text-xl font-bold text-gray-600">
              Hello!! {user.displayName}
            </h4>
            <h1 className="text-4xl font-bold text-gray-800 mt-">
              Welcome to Tour Hub!!
            </h1>
          </div>
        </div>
        <div>
          <Routes>
            {/* {!admin ? (
                <Route path="/" element={<MyProfile />} />
              ) : (
                <Route path="/" element={<AllMembership />} />
              )} */}
            <Route path="/addservice" element={<AddService />} />
            <Route path="/" element={<OrderList />} />
            <Route path="/makeadmin" element={<MakeAdmin />} />
            <Route path="/book/:bookId" element={<Book />} />
            <Route path="/addreview/:reviewId" element={<AddReview />} />
            <Route path="/manageorder" element={<ManageOrder />} />
            <Route path="/addblog" element={<AddBlog />} />
            {/* <Route path="/my-profile" element={<MyProfile />} />
              <Route
                path="/all-membership"
                element={
                  <AdminRoute>
                    <AllMembership />
                  </AdminRoute>
                }
              />
              <Route
                path="/add-review"
                element={
                  <AdminRoute>
                    <AddReview />
                  </AdminRoute>
                }
              />
              <Route
                path="/client-review"
                element={
                  <AdminRoute>
                    <ClientReviews />
                  </AdminRoute>
                }
              /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
