import BookingForm from "../views/BookingForm";
import React from "react";
import { activeCities } from "../utils/AppConstant";
import { useRouter as useHistory } from "next/router";

// import sections

const BookFormPage = (props) => {
  const history = useHistory();
  const { course } = history.query;
  const { city } = history.query;
  return (
    <BookingForm
      setIsLoading={props.setIsLoading}
      course={course}
      cityData={{ cityData: activeCities?.[city], city: city }}
    />
  );
};

export default BookFormPage;
