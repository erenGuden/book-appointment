import { Link } from "react-router-dom";
import Book from "./Book";
import "./styles.css";
import React, { Children, useContext } from "react";
import { useState } from "react";
import GlobalState, { GlobalProvider } from "../context/GlobalState";
import { GlobalContext, initialState } from "../context/GlobalState";

const Admin = () => {
  const { bookingData } = useContext(GlobalContext);

  return (
    <>
      <Link to="/book">Book</Link>
      <h2>Admin Page</h2>
      <h2>Reservations</h2>
      {bookingData.map((data, index) => (
        <div key={index}>
          Fullname: {data.name} <br></br> Email: {data.email} <br></br> Date:{" "}
          {data.date} <br></br> Time:
          {data.option}
        </div>
      ))}
    </>
  );
};

export default Admin;
