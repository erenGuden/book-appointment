import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const initialState = {
  bookingData: [],
};

export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action
  function addBooking(bookingData) {
    dispatch({
      type: "ADD_BOOKING",
      payload: bookingData,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        bookingData: state.bookingData,
        addBooking,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
