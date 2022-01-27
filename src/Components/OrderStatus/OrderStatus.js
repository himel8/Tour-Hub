import React, { useState } from "react";

const OrderStatus = ({ data }) => {
  console.log(data);
  const [status, setStatus] = useState("ongoing");
  const selectHandle = (e) => {
    setStatus(e.target.value);
  };
  console.log(status);
  if (status === "done") {
    fetch(`https://tourhub123.herokuapp.com/orders/status/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("update successfull");
        }
      });
  }
  return (
    <div>
      <select
        onClick={(e) => selectHandle(e)}
        class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
      >
        <option selected value="ongoing">
          On Going
        </option>
        <option value="done">Done</option>
      </select>
    </div>
  );
};

export default OrderStatus;
