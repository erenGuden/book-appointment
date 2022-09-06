import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <h2>Admin Page</h2>
      <Link to="/book">Click here to go to Admin Page</Link>
    </>
  );
};

export default Admin;
