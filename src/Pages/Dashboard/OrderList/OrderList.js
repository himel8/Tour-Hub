import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCheck from "../../../Components/ReviewCheck/ReviewCheck";
import useAuth from "../../../Hooks/useAuth";

const OrderList = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://tourhub123.herokuapp.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [user.email]);

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
      <h3 className="text-4xl">All Orders</h3>
      <div className="flex md:space-x-4">
        <div className="flex mt-4 justify-center w-full">
          <table className="min-w-full table-auto w-full">
            <thead className="justify-between">
              <tr className="bg-gray-600">
                <th className="px-2 py-2">
                  <span className="text-indigo-50 text-sm md:text-xl">
                    Plan
                  </span>
                </th>
                <th className="px-2 py-2">
                  <span className="text-indigo-50 text-sm md:text-xl">
                    Review
                  </span>
                </th>

                <th className="px-2 py-2">
                  <span className="text-indigo-50 text-sm md:text-xl">
                    Payment
                  </span>
                </th>
                <th className="px-2 py-2">
                  <span className="text-indigo-50 text-sm md:text-xl">
                    Status
                  </span>
                </th>
                <th className="px-2 py-2">
                  <span className="text-indigo-50 text-sm md:text-xl">
                    Action
                  </span>
                </th>
              </tr>
            </thead>

            {myOrder.map((data) => (
              <tbody key={data._id} className="bg-gray-200">
                <tr className="bg-white border-4 border-gray-200 text-center">
                  <td className="px-2 py-2 flex flex-row items-center text-md">
                    {data.serviceName}
                  </td>
                  <td>
                    <span className="text-center  font-semibold">
                      <ReviewCheck data={data} />
                    </span>
                  </td>

                  <td className="px-2 py-2">
                    {/* {data.action === "unpaid" ? (
                      <Stripe data={data} />
                    ) : (
                      <span className="text-green-600 text-lg uppercase font-bold">
                        paid
                      </span>
                    )} */}
                    <span className="text-green-600 text-lg uppercase font-bold">
                      paid
                    </span>
                  </td>
                  <td className="px-2 py-2">
                    <span>prosessing</span>
                  </td>
                  <td className="px-2 py-2">
                    <button
                      onClick={() => deleteHandler(data)}
                      className="mx-auto lg:mx-0 hover:underline gradient bg-yellow-400 font-bold text-black my-1 py-2 px-8 shadow-lg uppercase"
                    >
                      DELETE
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

export default OrderList;
