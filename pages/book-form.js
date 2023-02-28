import BookingForm from "../views/BookingForm";
import React from "react";

// import sections

const BookFormPage = (props) => {
  return <BookingForm setIsLoading={props.setIsLoading}/>;
};

export default BookFormPage;
