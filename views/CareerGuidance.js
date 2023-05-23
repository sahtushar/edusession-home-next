import React, { useEffect, useState } from "react";

import CareerGuidanceViewSection from "../components/sections/CareerGuidance";
import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import { canonicalPath } from "../utils/AppConstant";
import careerguidance from "./../assets/images/users/careerguidancehero.png";
import { useRouter as useHistory } from "next/router";

// import sections

const CareerGuidanceView = (props, ...{ city, cityData }) => {
  const getHelmetData = () => {
    return {
      title: `Edusession Career Guidance and Coaching ${
        cityData?.cityData ? `in ${cityData?.cityData?.display}` : ""
      } | Edusession`,
      desc: "Get One to One Online Tuitions from the best Instructors. Sign up now to get classes from highly qualified tutors for  JEE, NEET, Class 6 to 12, Spoken English, IELTS, CA & more",
    };
  };

  const history = useHistory();

  let HeroData = {
    header: city
      ? `<span>
          Online Live <span style="color:#5658dd">One to One</span>
          Personalized Class</span>
        </span>`
      : `<span>
      Unlock Your Potential: Expert <span style="color:#5658dd">Career Guidance</span> for 10th and 12th Grade Students`,
    subheader: `Introducing Edusession, a comprehensive career guidance program designed specifically for students who have just completed their 10th or 12th exams. Discover your true potential and make informed decisions about your future career path with the help of industry experts.`,
    rightImg: careerguidance,
    subheadertag: "h2",
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{getHelmetData().title}</title>
        <meta name="description" content={getHelmetData().desc} />
        <link rel="canonical" href={canonicalPath(history.pathname)} />
        <meta property="og:title" content={getHelmetData().title} />
        <meta property="og:description" content={getHelmetData().desc} />
        <meta itemprop="name" content={getHelmetData().title} />
        <meta itemprop="description" content={getHelmetData().desc} />
        <meta property="og:url" content={canonicalPath(history.asPath)} />
      </Head>
      <Header navPosition="right" page="book-form" cityData={cityData} />
      <main className="site-content">
        {/* <Hero className="illustration-section-01" data={HeroData?.[dashUrl]} /> */}
        {/* <Hero className="illustration-section-01" data={HeroData?.[dashUrl]} />
        <CourseIntro data={HeroData?.[dashUrl]} />
        <FAQ data={HeroData?.[dashUrl]} />
        <Testimonial data={HeroData?.[dashUrl]} /> */}
        {/* <Cta split /> */}
        {/* <Courses /> */}
        {/* <Approach /> */}
        <Hero
          className="illustration-section-01"
          data={HeroData}
          cityData={cityData}
          rightImg={careerguidance}
          courseIdentifier="career-guidance"
          bookButton="career-guidance"
        />
        <CareerGuidanceViewSection
          course={props.course}
          setIsLoading={props.setIsLoading}
          cityData={cityData}
        />
      </main>
      <Footer cityData={cityData} />
    </>
  );
};

export default CareerGuidanceView;