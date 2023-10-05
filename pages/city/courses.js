import React, { useEffect, useState } from "react";
import {
  coursesPaths,
  getCourseData,
  getCourseDataResult,
} from "./../../utils/AppConstant";

import CoursesPage from "./../../views/Courses";
import { useRouter as useHistory } from "next/router";

// import { callCourseData } from "../../../services/authroutes";

const Course = (props) => {
  const history = useHistory();
  const { course } = history.query;
  const [courseData, setCourseData] = useState(props.courseData);
  // const setIsLoading = props.setIsLoading;

  useEffect(() => {
    if (course) {
      if (getCourseData[course]) {
        setCourseData(getCourseDataResult[course]);
      } else history.push("/");
    }
  }, [course]);

  return (
    <CoursesPage
      course={course}
      courseData={courseData}
      {...props}
    />
  );
};

// export async function getStaticPaths() {

//   return {
//     paths: coursesPaths,
//     fallback: false, // can also be true or 'blocking'
//   }
// }

// export async function getStaticProps(context) {
//   const { course } = context.params;
//   // const setIsLoading = props.setIsLoading;
//   if (course) {
//     let body = {
//       course: course,
//     };
//     //setIsLoading(true);

//     let data = getCourseDataResult[course];
//     //setIsLoading(false);
//     return { props: { courseData: data } };
//   }
// }

export default Course;
// export const getStaticPath = async () => {
//   return {
//       paths: [], //indicates that no page needs be created at build time
//       fallback: 'blocking' //indicates the type of fallback
//   }
// }

