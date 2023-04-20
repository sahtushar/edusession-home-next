import React, { useEffect, useState } from "react";
import {
  canonicalPath,
  capitalize,
  getCourseData,
  getCourseDataResult,
  getCourseMetaTags,
} from "../utils/AppConstant";

import Approach from "../components/sections/Approach";
import CourseIntro from "../components/sections/CourseIntroSection";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import MoreCourses from "../components/elements/MoreCourses";
import StructuredData from "../components/elements/StructuredData";
import Testimonial from "../components/sections/Testimonial";
import { callCourseData } from "../services/authroutes";
import homepageicon from "./../assets/images/homepageicon.png";
import spokenenglishicon from "./../assets/images/spoken-english.png";
import { useRouter as useHistory } from "next/router";

// import sections

const CoursesPage = (props) => {
  const history = useHistory();
  const [dashUrl, setdashUrl] = useState(props.course);
  const courseData = props.courseData;
  const [header, setHeader] = useState("");
  const course = props.course;
  const cityData = props.cityData;

  useEffect(() => {
    setHeader(getCourseData[course]);
  }, [props.course]);

  const getRightImageDetails = {
    "spoken-english": {
      icon: spokenenglishicon,
      alt: "Spoken English Classes",
    },
  };
  const getHelmetData = () => {
    return {
      title: `${header} Online One to One Class ${
        cityData?.cityData ? `in ${cityData?.cityData?.display}` : ""
      } | Edusession`,
      desc: `Get One to One Online Tuitions from the best Instructors ${
        cityData?.cityData ? `in ${cityData?.cityData?.display}` : ""
      }. Sign up now to get classes from highly qualified tutors for ${header}`,
    };
  };

  const getMetaTags = () => {
    if (!cityData.cityData) {
      if (getCourseMetaTags[course]) {
        return getCourseMetaTags[course];
      } else {
        return getHelmetData();
      }
    } else {
      return getHelmetData();
    }
  };
  return (
    <>
      {header && (
        <Head>
          <meta charSet="utf-8" />
          <title>{getMetaTags().title}</title>
          <meta name="description" content={getMetaTags().desc} />
          <meta property="og:title" content={getMetaTags().title} />
          <meta property="og:description" content={getMetaTags().desc} />
          <meta itemprop="name" content={getMetaTags().title} />
          <meta itemprop="description" content={getMetaTags().desc} />
          <meta property="og:url" content={canonicalPath(history.asPath)} />
          <link rel="canonical" href={canonicalPath(history.asPath)} />
        </Head>
      )}
      <StructuredData data={courseData?.structuredData} />
      <Header navPosition="right" page="course" cityData={cityData} />
      <main className="site-content">
        <Hero
          className="illustration-section-01"
          data={courseData}
          courseIdentifier={props.course}
          rightImg={getRightImageDetails?.[course]?.icon || homepageicon}
          alt={
            getRightImageDetails?.[course]?.alt || "Edusession online classes"
          }
          cityData={cityData}
          course={course}
        />
        <CourseIntro
          data={courseData}
          courseIdentifier={props.course}
          setIsLoading={props.setIsLoading}
        />

        <FAQ data={courseData} />
        <MoreCourses
          header={`More Courses by Edusession ${
            cityData?.cityData ? ` in ${cityData?.cityData?.display}` : ""
          }`}
          cityData={cityData}
        />
        <Testimonial data={courseData} city={cityData?.cityData?.display} />
        {/* <Cta split /> */}
        {/* <Courses /> */}
        <Approach />
      </main>
      <Footer city={cityData?.cityData?.display} cityData={cityData} />
    </>
  );
};

export default CoursesPage;
