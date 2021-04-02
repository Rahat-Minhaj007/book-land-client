import {  UserContext } from "../../App";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ManageDetail from "../ManageDetail/ManageDetail";
import { BeatLoader } from "react-spinners";


const ManageBook = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { email } = loggedInUser;
  const [manageData, setManageData] = useState([]);
  useEffect(() => {
    fetch("https://fathomless-temple-21238.herokuapp.com/book")
      .then((res) => res.json())
      .then((data) => setManageData(data));
  }, [manageData]);

  

  

  return (
    <div >
      <h1 className="text-center">Manage Your Book </h1>
      <div className="row d-flex justify-content-center">

      <div style={{marginTop:"350px"}}>
        {manageData.length === 0 && (
          <BeatLoader size={48} color="black" loading />
        )}
        </div>
        {manageData.map((userManageDetail) => (
          <ManageDetail manageDetails={userManageDetail}></ManageDetail>
        ))}
      </div>
    </div>
  );
};

export default ManageBook;