import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

export const initialState = {
  bookingData: [],
};

export const GlobalContext = createContext(initialState);

// Provider component and local storage
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem("state");
    return localData ? JSON.parse(localData) : initialState;
  });
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

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
