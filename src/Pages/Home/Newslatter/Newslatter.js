import React, { useState } from "react";

const Newslatter = () => {
  const [email, setEmail] = useState({});
  const [success, setSuccess] = useState(false);
  console.log(email);
  const getMail = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newMail = { ...email };
    newMail[field] = value;
    setEmail(newMail);
  };
  const sendMail = (e) => {
    if (email.email) {
      setSuccess(true);
      setEmail({});
    } else {
      setSuccess(false);
    }
  };
  return (
    <>
      <div className="py-10 md:px-24 px-4 bg-center	bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1621947081720-86970823b77a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')] grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="text-2xl	 text-white capitalize font-bold">
            Sign Up for newalatters
          </h1>
          <p className="text-m py-1 text-gray-400 font-semibold">
            Get E-mail updates about our plans and{" "}
            <span className="text-orange-500	">special offers.</span>
          </p>
        </div>
        <div className="flex  justify-center">
          <input
            type="email"
            name="email"
            onBlur={(e) => getMail(e)}
            class="mt-1 px-3 py-2 md:py-0 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full  sm:text-sm focus:ring-1"
            placeholder="you@example.com"
          />
          <button
            onClick={sendMail}
            className="w-3/6 bg-gradient-to-r from-emerald-500 to-lime-500 text-lg text-white font-semibold mt-1 py-2 md:py-0 px-6  hover:opacity-90 duration-500"
          >
            Sign up
          </button>
        </div>
      </div>
      {success && (
        <h1 className="text-xl text-green-900 capitalize text-center font-semibold">
          newalatter successfully
        </h1>
      )}
    </>
  );
};

export default Newslatter;
