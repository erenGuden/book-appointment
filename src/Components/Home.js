import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
        <Link to="/book">Book</Link>
        <div></div>
        <Link to="/admin">Admin</Link>
      <h2></h2>
    </>
  );
};

export default Home;
