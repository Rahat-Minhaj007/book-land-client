import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import "./checkOut.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5055/book")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const checkOutProduct = product.find(
    (pd) => parseInt(pd._id) === parseInt(_id)
  );

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
          <Link  class="btn d-flex justify-content-end" to="/orders">
            <button
              class="btn btn-dark"
            
            >
              <strong>Check Out</strong>
            </button>
          </Link>
        </div>
      </div>
      <div className="col-md-3 checkImg">
        <Card style={{ width: "18rem", border: "none", background: "none" }}>
          <Card.Body
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
