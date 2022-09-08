import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Book = () => {
  const timeSlots = [
    "09:00 - 09:30",
    "09:30 - 10:00",
    "10:00 - 10:30",
    "10:30 - 11:00",
    "11:00 - 11:30",
  ];
  return (
    <>
      <Link button type="button" class="btn btn-info" to="/admin">
        Admin
      </Link>
      <form>
        <div class="row justify-content-center">
          <div class="col-md-4">
            <h2>Book Appointment</h2>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label for="name">Full Name</label>
              <input
                type="name"
                class="form-control"
                id="name"
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label for="date">Date</label>
              <input type="date" class="form-control" id="date" />
            </div>
            <label>Time</label>
            <select class="form-select">
              {timeSlots.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <br></br>
            <button type="button" class="btn btn-outline-primary">
              Book
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="16"
                fill="currentColor"
                class="bi bi-save-fill"
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
