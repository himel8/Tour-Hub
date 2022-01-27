import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderStatus from "../../../Components/OrderStatus/OrderStatus";

const ManageOrder = () => {
  const [allOrder, setAllOrder] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://tourhub123.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  }, []);
  const deleteHandler = (data) => {
    fetch(`https://tourhub123.herokuapp.com/orders/${data._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          alert("service deleted successfully");
          navigate("/");
        }
      });
  };
  return (
    <div>
      <h3 className="text-4xl">Manage All Orders</h3>
      <div className="flex space-x-4">
        <div className="flex mt-4 justify-center w-full">
          <table className="min-w-full table-auto w-full">
            <thead className="justify-between">
              <tr className="bg-gray-600">
                <th className="px-2 py-2">
                  <span className="text-indigo-50 text-xl">Name</span>
                </th>
                <th className="px-2 py-2">
                  <span className="text-indigo-50 text-xl">Email</span>
                </th>
                <th className="px-2 py-2">
                  <span className="text-indigo-50 text-xl">Package</span>
                </th>

                <th className="px-2 py-2">
                  <span className="text-indigo-50 text-xl">Status</span>
                </th>
                <th className="px-2 py-2">
                  <span className="text-indigo-50 text-xl">Action</span>
                </th>
              </tr>
            </thead>

            {allOrder.map((data) => (
              <tbody key={data._id} className="bg-gray-200">
                <tr className="bg-white border-4 border-gray-200 text-center">
                  <td className="px-2 py-2 flex flex-row items-center text-md">
                    {data.name}
                  </td>
                  <td>
                    <span className="text-center ml-2 font-semibold">
                      {data.email}
                    </span>
                  </td>
                  <td>
                    <span className="text-center ml-2 font-semibold">
                      {data.serviceName}
                    </span>
                  </td>

                  <td className="px-2 py-2">
                    <span className="text-green-600 text-lg uppercase font-bold">
                      <OrderStatus data={data} />
                    </span>
                  </td>
                  <td className="px-2 py-2">
                    <button
                      onClick={() => deleteHandler(data._id)}
                      className="custom-delete mx-auto lg:mx-0 hover:underline gradient  font-bold text-black my-1 py-2 px-8  uppercase"
                    >
                      <ion-icon name="trash-outline"></ion-icon>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
