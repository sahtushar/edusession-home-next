import React, { useEffect, useState } from "react";
import { coursesPaths, getCourseData } from "./../../utils/AppConstant";

import CoursesPage from "../../views/Courses";
import { callCourseData } from "../../services/authroutes";
import { useRouter as useHistory } from "next/router";

const Course = (props) => {
  const history = useHistory();
  const { course } = history.query;
  const setIsLoading = props.setIsLoading;

  const [activeCourse, setActivecourse] = useState("");
  useEffect(() => {}, [props.course]);

  useEffect(() => {
    if (course) {
      if (getCourseData[course]) setActivecourse(course);
      else history.push("/");
    }
  }, [course]);

  return <CoursesPage course={activeCourse} {...props} />;
};

// export async function getStaticPaths() {

//   return {
//     paths: coursesPaths,
//     fallback: false, // can also be true or 'blocking'
//   }
// }

export async function getServerSideProps (context) {
  const { course } = context.params;
  // const setIsLoading = props.setIsLoading;
  if (course) {
    let body = {
      course: course,
    };
    //setIsLoading(true);

    let res = await callCourseData(body);
    //setIsLoading(false);
    return { props: { courseData: res?.data?.courseData?.data } };
  }
}

export default Course;
// export const getStaticPath = async () => {
//   return {
//       paths: [], //indicates that no page needs be created at build time
//       fallback: 'blocking' //indicates the type of fallback
//   }
// }
