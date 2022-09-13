import { Link } from "react-router-dom";
import "./styles.css";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Admin = () => {
  const { bookingData } = useContext(GlobalContext);
  const sortedData = bookingData.sort((a, b) =>
    a.date > b.date
      ? 1
      : a.date < b.date
      ? -1
      : 0 || a.option > b.option
      ? 1
      : a.option < b.option
      ? -1
      : 0
  );

  return (
    <>
      <Link type="button" className="btn btn-info" to="/book">
        Book
      </Link>
      <div
        className="mx-auto col-md-3"
        style={{ textAlign: "center", padding: "10px" }}
      >
        <h2>Admin Page</h2>
        <h3>Reservations</h3>
        {sortedData.map((data, index) => (
          <div key={index} style={{ padding: "5px" }}>
            <div
              className="card border-success mb-3"
              style={{ padding: "5px" }}
            >
              <div
                className="card-header bg-transparent border-success"
                style={{ fontWeight: "bold", padding: "5px" }}
              >
                Booking of {data.name}
              </div>
              Fullname: {data.name} <br></br> Email: {data.email} <br></br>{" "}
              Date: {data.date} <br></br> Time:
              {data.option}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Admin;
