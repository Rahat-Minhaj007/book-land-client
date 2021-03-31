import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddBook.css";

const AddBook = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      author: data.author,
      price: data.price,
      imageURL: imageURL,
    };

    const url = `http://localhost:5055/addBook`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response", res));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "1de815058f5b53f37e6fc69c4c1d88ca");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="mt-5">
      
      <h1 className="text-center">Make Your Awesome Book List...</h1>
      <form className="mt-5 login " onSubmit={handleSubmit(onSubmit)}>
        <div className="login-input-field">
          {/* <h6>Book Name</h6> */}
          <input
            name="name"
            type="text"
            placeholder="Enter Book Name ..."
            ref={register}
          />
        </div>
        <br/>
     
        <div className="login-input-field">
        {/* <h6>Author Name</h6> */}
          <input
            name="author"
            type="text"
            placeholder="Enter Author Name ..."
            ref={register}
          />
        </div>
        <br/>
        <div className="login-input-field">
        {/* <h6>Add Price</h6> */}
          <input name="price" type="text" placeholder="Add Price ..." ref={register} />
        </div>
      <br/>
        <div className="login-input-field">
        <h6>Add Book Cover Photo</h6>
          <input
            name="exampleRequired"
            type="file"
            onChange={handleImageUpload}
          />
        </div>
        <br/>
        
        <input className="anotherLoginBtnAdmin" type="submit" />
      </form>
    </div>
  );
};

export default AddBook;
