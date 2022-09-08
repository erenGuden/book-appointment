import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Link to="/book">Book</Link>
      <h2>Admin Page</h2>
      <h2>Reservations</h2>
    </>
  );
};

export default Admin;
