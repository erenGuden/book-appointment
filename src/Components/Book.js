import React from "react";
import { Link } from "react-router-dom";

const Book = () => {
  return (
    <>
      <h2>Book Appointment</h2>
      <Link to="/admin">Click here to go to Admin Page</Link>
    </>
  );
};

export default Book;
