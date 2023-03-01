import BookingForm from "../views/BookingForm";
import React from "react";
import { useRouter as useHistory } from "next/router";

// import sections

const BookFormPage = (props) => {
  const history = useHistory();
  const { course } = history.query;

  return <BookingForm setIsLoading={props.setIsLoading} course={course} />;
};

export default BookFormPage;
