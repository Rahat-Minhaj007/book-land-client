import React from 'react';
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ManageDetail = (props) => {
    const {name, imageURL, price,_id,author} = props.manageDetails;

    const handleDelete = (id) => {
        console.log(id);
        if(window.confirm('Are You Want to Delete')){

        
                fetch(`https://fathomless-temple-21238.herokuapp.com/delete/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(result => {
                    console.log('Deleted Successfully');
                })
            }
    }
    
    
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
            <h6>Product Name: {name}</h6>
            <h6>Quantity: {author}</h6>
            <h6>Total Price: ${price}</h6>
           
            <div className="d-flex justify-content-end">
            <button onClick={() => handleDelete(_id)} className="btn btn-dark">Delete  <FontAwesomeIcon icon={faTrash} /></button>
            </div>
            
          </Card.Body>
        </Card>
      </div>
    );
};

export default ManageDetail;