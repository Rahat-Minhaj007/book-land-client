import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import "./checkOut.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
import React, { useContext } from 'react';

const CheckOut = () => {

  const [loggedInUser,setLoggedInUser] = useContext(UserContext);

  const { _id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fathomless-temple-21238.herokuapp.com/book")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const checkOutProduct = product.find(
    (pd) => parseInt(pd._id) === parseInt(_id)
  );
const handleOrder = () => {
  const orderDetail = {...loggedInUser, products:checkOutProduct,quantity:1,orderTime: new Date ()};
  const url = `http://localhost:5055/addOrder`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderDetail),
  })
  .then(res => res.json())
  .then (data => {
    if(data){
      alert('your order placed successfully');
    }
  })
}

  return (
    <div className=" row d-flex justify-content-center ">
      <div className="checkOut col-md-5">
        <div
          style={{ color: "grey" }}
          className="d-flex justify-content-between "
        >
          <h4>Description</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </div>
        <hr />
        <div className="d-flex justify-content-between text-center">
          <h5>{checkOutProduct?.name}</h5>
          <h5>1</h5>
          <h5>$ {checkOutProduct?.price}</h5>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <h5>Total</h5>
          <h5>$ {checkOutProduct?.price}</h5>
        </div>
        <div>
          <Link  class="btn d-flex justify-content-end" to="/order">
            <button
              class="btn btn-dark"
              onClick={handleOrder}
            >
              <strong>Check Out</strong>
            </button>
          </Link>
        </div>
      </div>
      <div className="col-md-3 checkImg">
        <Card style={{ width: "18rem", border: "none", background: "none" }}>
          <Card.Body
            className="cardBody"
            style={{
              backgroundColor: "whiteSmoke",
              borderRadius: "5px",
              border: "none",

            }}
          >
            <Card.Img
              style={{ width: "100%" }}
              variant="top"
              src={checkOutProduct?.imageURL}
            />
            <Card.Title className="mt-3">
              Author: {checkOutProduct?.author}
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CheckOut;
