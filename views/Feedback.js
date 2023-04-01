import React, { useEffect, useState } from "react";
import { canonicalPath, verifyIsUserAuthenticated } from "../utils/AppConstant";

import EventSignup from "../components/sections/EventSignup";
import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/layout/Header";
import SignUp from "../components/sections/SignUpForm";
import TeacherFeedback from "../components/sections/Feedback";
import { useRouter as useHistory } from "next/router";

const Feedback = (props) => {
  const history = useHistory();
  // if (verifyIsUserAuthenticated()) {
  //   history.push("/");
  // }

  const getHelmetData = () => {
    return {
      title: `Teacher Feedback Form - Online One to One Class | Edusession`,
      desc: "Get One to One Online Tuitions from the best Instructors. Sign up now to get classes from highly qualified tutors for  JEE, NEET, Class 6 to 12, Spoken English, IELTS, CA & more",
    };
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{getHelmetData().title}</title>
        <meta name="description" content={getHelmetData().desc} />
        <link rel="canonical" href={canonicalPath(history.asPath)} />
        <meta property="og:title" content={getHelmetData().title} />
        <meta property="og:description" content={getHelmetData().desc} />
        <meta property="og:url" content={canonicalPath(history.asPath)} />
      </Head>

      <Header navPosition="right" page="sign-up" />
      <main className="site-content">
        {/* <Hero className="illustration-section-01" data={HeroData?.[dashUrl]} />
        <CourseIntro data={HeroData?.[dashUrl]} />
        <FAQ data={HeroData?.[dashUrl]} />
        <Testimonial data={HeroData?.[dashUrl]} /> */}
        {/* <Cta split /> */}
        {/* <Courses /> */}
        {/* <Approach /> */}
        {/* <BookForm /> */}
        <TeacherFeedback setIsLoading={props.setIsLoading} />
      </main>
      {/* <Banner /> */}
      <Footer />
    </>
  );
};

export default Feedback;
