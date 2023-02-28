import React, { useEffect } from "react";

import BookingForm from "../../views/BookingForm";
import { getCourseData } from "../../utils/AppConstant";
import { useRouter as useHistory } from "next/router";

// import sections

const BookFormPage = (props) => {
  const history = useHistory();
  const { selectedCourse } = history.query;
//   useEffect(() => {
//     if (!getCourseData?.[selectedCourse]) {
//       history.push("/");
//     }
//   }, [selectedCourse]);

  return (
    <BookingForm setIsLoading={props.setIsLoading} course={selectedCourse} />
  );
};

export default BookFormPage;
