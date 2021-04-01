import {  UserContext } from "../../App";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ManageDetail from "../ManageDetail/ManageDetail";


const ManageBook = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { email } = loggedInUser;
  const [manageData, setManageData] = useState([]);
  useEffect(() => {
    fetch("https://fathomless-temple-21238.herokuapp.com/book")
      .then((res) => res.json())
      .then((data) => setManageData(data));
  }, []);

//   const specificUserManageBook = manageData.filter((user) => user.email === email);
  

  return (
    <div >
      <h1 className="text-center">Manage Your Book </h1>
      <div className="row d-flex justify-content-center">
        {manageData.map((userManageDetail) => (
          <ManageDetail manageDetails={userManageDetail}></ManageDetail>
        ))}
      </div>
    </div>
  );
};

export default ManageBook;