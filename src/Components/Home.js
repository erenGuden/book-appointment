import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to="/book">Book</Link>
      <div></div>
      <Link to="/admin">Admin</Link>
    </>
  );
};

export default Home;
