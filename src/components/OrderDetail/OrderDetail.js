import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderDetail = (props) => {
    const {name,email,products,orderTime,quantity} = props.OrderDetails;
    
    return (
        <div className="mt-5 ml-5 mb-4 col-md-3">
        <Card style={{ width: "18rem", border: "none", background: "none" }}>
          <Card.Body
            style={{
              backgroundColor: "whiteSmoke",
              borderRadius: "5px",
              border: "none",
            }}
          >
            <Card.Img style={{ width: "100%" }} variant="top" src={products?.imageURL} />
            <h6 className="mt-3">Customer Name: {name}</h6>
            <h6>Customer Email: {email}</h6>
            <h6>Product Name: {products.name}</h6>
            <h6>Quantity: {quantity}</h6>
            <h6>Total Price: ${products.price}</h6>
            <h6>Order Time: {orderTime}</h6>


         
            
          </Card.Body>
        </Card>
      </div>
    );
};

export default OrderDetail;