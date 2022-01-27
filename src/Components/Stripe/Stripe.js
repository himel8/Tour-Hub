import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const Stripe = ({ data }) => {
  const [servicePrice, setServicePrice] = useState(0);
  const { _id, price, email, serviceName } = data;
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };

  const desc = `${serviceName}`;

  useEffect(() => {
    fetch(`https://tourhub123.herokuapp.com/services/price/${serviceName}`)
      .then((res) => res.json())
      .then((data) => setServicePrice(data));
  }, [data]);

  useEffect(() => {
    fetch("https://tourhub123.herokuapp.com/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        tokenId: stripeToken?.id,
        amount: { price },
      }),
    })
      .then((res) => res.json())
      .then((data) => {});
  }, [stripeToken]);

  if (stripeToken) {
    fetch(`https://tourhub123.herokuapp.com/orders/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("paid successfull");
          Navigate("/dashboard");
        }
      });
  }
  return (
    <div>
      {stripeToken ? (
        <span className="text-green-600 text-lg uppercase font-bold">paid</span>
      ) : (
        <StripeCheckout
          name="Tour Hub"
          email={email}
          image="https://i.ibb.co/Fn4BTzz/logo.png"
          description={desc}
          amount={servicePrice * 100}
          token={onToken}
          stripeKey={process.env.REACT_APP_STRIPE_SECRET_KEY}
        />
      )}
    </div>
  );
};

export default Stripe;
