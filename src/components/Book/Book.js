import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Book = (props) => {
  const { name, imageURL, price,_id, author } = props.book;
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
          <Card.Img style={{ width: "100%" }} variant="top" src={imageURL} />
          <Card.Title className="mt-3">{name}</Card.Title>
          <p>{author}</p>
          <div className="d-flex justify-content-between">
            <h4 style={{ color: "black" }}>$ {price}</h4>
            <Link to={`/checkOut/${_id}`}>
              <button
                class="btn"
                style={{ backgroundColor: "black", color: "white" }}
              >
                <strong>Buy Now</strong>
              </button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Book;
