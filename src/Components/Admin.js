import { Link } from "react-router-dom";
import "./styles.css";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Admin = () => {
  const { bookingData } = useContext(GlobalContext);

  return (
    <>
      <Link type="button" className="btn btn-info" to="/book">
        Book
      </Link>
      <h2>Admin Page</h2>
      <h3>Reservations</h3>
      {bookingData.map((data, index) => (
        <div key={index}>
          Fullname: {data.name} <br></br> Email: {data.email} <br></br> Date:{" "}
          {data.date} <br></br> Time:
          {data.option}
          <hr></hr>
        </div>
      ))}
    </>
  );
};

export default Admin;
