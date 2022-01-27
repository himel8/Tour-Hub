import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
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
    // <div>
    //   <div className="min-h-screen flex">
    //     {/* className="py-12 px-10 w-1/5 */}
    //     <div className="min-h-screen">
    //       <div class="min-h-screen bg-gray-800 text-gray-100 flex justify-between md:hidden">
    //         {/* <!-- logo --> */}
    //         <a href="#" class="block p-4 text-white font-bold">
    //           Better Dev
    //         </a>

    //         {/* <!-- mobile menu button --> */}
    //         <button class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
    //           <svg
    //             class="h-5 w-5"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M4 6h16M4 12h16M4 18h16"
    //             />
    //           </svg>
    //         </button>
    //       </div>

    //       {/* <!-- sidebar --> */}
    //       <div class=" min-h-screen sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
    //         {/* <!-- logo --> */}
    //         <a href="#" class="text-white flex items-center space-x-2 px-4">
    //           <svg
    //             class="w-8 h-8"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    //             />
    //           </svg>
    //           <span class="text-2xl font-extrabold">Better Dev</span>
    //         </a>

    //         {/* <!-- nav --> */}
    //         <nav>
    //           <a
    //             href="#"
    //             class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
    //           >
    //             Home
    //           </a>
    //           <a
    //             href=""
    //             class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
    //           >
    //             About
    //           </a>
    //           <a
    //             href=""
    //             class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
    //           >
    //             Features
    //           </a>
    //           <a
    //             href=""
    //             class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
    //           >
    //             Pricing
    //           </a>
    //         </nav>
    //       </div>
    //     </div>
    //     <div className="bg-indigo-50 flex-grow py-12 px-10 w-4/5">
    //       <div className="flex justify-between border-b pb-8 mb-4">
    //         <div className="center">
    //           <h4 className="text-xl font-bold text-gray-600">
    //             Hello!! {user.displayName}
    //           </h4>
    //           <h1 className="text-4xl font-bold text-gray-800 mt-">
    //             Welcome to Tour Hub!!
    //           </h1>
    //         </div>
    //         <div>
    //           <div className="flex items-center border rounded-lg bg-white w-max py-2 px-4 space-x-3">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-4 w-4 text-gray-400"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //               />
    //             </svg>
    //             <input
    //               className="outline-none"
    //               type="text"
    //               placeholder="Search"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div>
    //         <Routes>
    //           {/* {!admin ? (
    //             <Route path="/" element={} />
    //           ) : (
    //             <Route path="/" element={} />
    //           )} */}
    //           <Route path="/addservice" element={<AddService />} />
    //           {/* <Route path="/my-profile" element={} />
    //           <Route
    //             path="/all-membership"
    //             element={
    //               <AdminRoute>
    //                 <AllMembership />
    //               </AdminRoute>
    //             }
    //           />
    //           <Route
    //             path="/add-review"
    //             element={
    //               <AdminRoute>
    //                 <AddReview />
    //               </AdminRoute>
    //             }
    //           />
    //           <Route
    //             path="/client-review"
    //             element={
    //               <AdminRoute>
    //                 <ClientReviews />
    //               </AdminRoute>
    //             } />*/}
    //         </Routes>
    //       </div>
    //     </div>
    //   </div>
    // </div>

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
              <Link to="/dashboard/orderlist">Booking List</Link>
            </li>
            <li className="py-2 font-semibold hover:underline">
              <Link to="/dashboard/makeadmin">Make Admin</Link>
            </li>
            <li className="py-2 font-semibold hover:underline">
              <Link to="/dashboard/manageorder">Manage Orders</Link>
            </li>
            <li className="py-2 font-semibold hover:underline">
              <Link to="/dashboard/addreview">Add Review</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* <!-- content --> */}
      <div class="flex-1 p-10 ">
        <div className="flex justify-between border-b pb-8 mb-4">
          <div className="center">
            <h4 className="text-xl font-bold text-gray-600">
              Hello!! {user.displayName}
            </h4>
            <h1 className="text-4xl font-bold text-gray-800 mt-">
              Welcome to Tour Hub!!
            </h1>
          </div>
          <div>
            <div className="flex items-center border rounded-lg bg-white w-max py-2 px-4 space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="outline-none"
                type="text"
                placeholder="Search"
              />
            </div>
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
            <Route path="/orderlist" element={<OrderList />} />
            <Route path="/makeadmin" element={<MakeAdmin />} />
            <Route path="/book/:bookId" element={<Book />} />
            <Route path="/addreview" element={<AddReview />} />
            <Route path="/manageorder" element={<ManageOrder />} />
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
