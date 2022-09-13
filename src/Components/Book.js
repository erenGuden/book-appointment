import "./styles.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Book = () => {
  const { addBooking } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [option, setOption] = useState("");
  const [success, setSuccess] = useState(false);
  
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleOption = (event) => {
    setOption(event.target.value);
  };

  const onSave = (e) => {
    e.preventDefault();
    setName("");
    setDate("");
    setEmail("");
    setOption("");

    const newBooking = {
      name,
      email,
      date,
      option,
    };

    addBooking(newBooking);
    setSuccess(true);
  };

  const timeSlots = [
    "09:00 - 09:30",
    "09:30 - 10:00",
    "10:00 - 10:30",
    "10:30 - 11:00",
    "11:00 - 11:30",
  ];

  return (
    <>
      <Link type="button" className="btn btn-info" to="/admin">
        Admin
      </Link>
      <form>
        <div className="row justify-content-center">
          <div className="col-md-4">
            {success && (
              <div className="alert alert-success" role="alert">
                You completed your reservation successfully.
              </div>
            )}
            <h2>Book Appointment</h2>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={name}
                onChange={handleName}
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                onChange={handleDate}
                value={date}
              />
            </div>
            <label>Time</label>
            <select
              className="form-select"
              value={option}
              onChange={handleOption}
              disabled={!date}
            >
              {timeSlots.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
            <br></br>
            <button
              onClick={onSave}
              type="button"
              className="btn btn-outline-primary"
              disabled={!email || !name || !date || !option}
            >
              Book
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="16"
                fill="currentColor"
                className="bi bi-save-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Book;
