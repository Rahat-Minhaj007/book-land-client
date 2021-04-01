import { UserContext } from "../../App";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import OrderDetail from "../OrderDetail/OrderDetail";

const Order = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { email } = loggedInUser;
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    fetch("https://fathomless-temple-21238.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setOrderData(data));
  }, []);

  const specificUserOrder = orderData.filter((user) => user.email === email);

  return (
    <div >
      <h1 className="text-center">Thank You For Your Shopping With Us </h1>
      <div className="row d-flex justify-content-center">
        {specificUserOrder.map((userOrderDetail) => (
          <OrderDetail OrderDetails={userOrderDetail}></OrderDetail>
        ))}
      </div>
    </div>
  );
};

export default Order;
