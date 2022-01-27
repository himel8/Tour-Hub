import React from "react";

const ManageOrder = () => {
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
                  <span className="text-indigo-50 text-xl">Price</span>
                </th>

                <th className="px-2 py-2">
                  <span className="text-indigo-50 text-xl">Status</span>
                </th>
                <th className="px-2 py-2">
                  <span className="text-indigo-50 text-xl">Action</span>
                </th>
              </tr>
            </thead>

            <tbody className="bg-gray-200">
              <tr className="bg-white border-4 border-gray-200 text-center">
                <td className="px-2 py-2 flex flex-row items-center text-md">
                  fvgfv
                </td>
                <td>
                  <span className="text-center ml-2 font-semibold">
                    fggdfgfg
                  </span>
                </td>
                <td>
                  <span className="text-center ml-2 font-semibold">
                    fggdfgfg
                  </span>
                </td>
                <td className="px-2 py-2">10</td>
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
                  <button
                    //   onClick={() => deleteHandler(data)}
                    className="mx-auto lg:mx-0 hover:underline gradient bg-yellow-400 font-bold text-black my-1 py-2 px-8 shadow-lg uppercase"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
