import React, { useEffect, useState } from "react";
import {
  canonicalPath,
  getCourseData,
  getCourseDataResult,
} from "../utils/AppConstant";

import Approach from "../components/sections/Approach";
import CourseIntro from "../components/sections/CourseIntroSection";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import StructuredData from "../components/elements/StructuredData";
import Testimonial from "../components/sections/Testimonial";
import { callCourseData } from "../services/authroutes";
import homepageicon from "./../assets/images/homepageicon.png";
import { useRouter as useHistory } from "next/router";

// import sections

const CoursesPage = (props) => {
  const history = useHistory();
  const [dashUrl, setdashUrl] = useState(props.course);
  const [courseData, setCourseData] = useState([]);
  const course = props.course;
  let header = getCourseData[course];

  useEffect(() => {
    setCourseData(getCourseDataResult[props.course] || []);
  }, [props.course]);

  const getHelmetData = () => {
    return {
      title: `${header} Online One to One Class | Edusession`,
      desc: `Get One to One Online Tuitions from the best Instructors. Sign up now to get classes from highly qualified tutors for ${header}`,
    };
  };

  return (
    <>
      {header && <Head>
        <meta charSet="utf-8" />
        <title>{getHelmetData().title}</title>
        <meta name="description" content={getHelmetData().desc} />
        <link rel="canonical" href={canonicalPath(history.asPath)} />
      </Head>}
      <StructuredData data={courseData.structuredData} />
      <Header navPosition="right" page="course" />
      <main className="site-content">
        <Hero
          className="illustration-section-01"
          data={courseData}
          course={dashUrl}
          rightImg={homepageicon}
        />
        <CourseIntro
          data={courseData}
          courseIdentifier={dashUrl}
          setIsLoading={props.setIsLoading}
        />
        <FAQ data={courseData} />
        <Testimonial data={courseData} />
        {/* <Cta split /> */}
        {/* <Courses /> */}
        <Approach />
      </main>
      <Footer />
    </>
  );
};

export default CoursesPage;
