import BookedClasses from "../views/BookedClasses";
import BookingForm from "../views/BookingForm";
import React from "react";
import { useRouter as useHistory } from "next/router";

// import sections

const BookedClassesPage = (props) => {
  const history = useHistory();

  return <BookedClasses setIsLoading={props.setIsLoading} />;
};

export default BookedClassesPage;
