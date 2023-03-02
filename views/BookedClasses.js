import React, { useEffect, useState } from "react";

import BookedClassesSection from "../components/sections/BookedClassesSection";
import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/layout/Header";
import { canonicalPath } from "../utils/AppConstant";
import { useRouter as useHistory } from "next/router";

const BookedClasses = (props) => {
  const history = useHistory();

  const getHelmetData = () => {
    return {
      title: `Book Online One to One Class | Edusession Admin Panel`,
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
      </Head>

      <Header navPosition="right" page="profile-page" />
      <main className="site-content">
        {/* <Hero className="illustration-section-01" data={HeroData?.[dashUrl]} /> */}
        {/* <Hero className="illustration-section-01" data={HeroData?.[dashUrl]} />
        <CourseIntro data={HeroData?.[dashUrl]} />
        <FAQ data={HeroData?.[dashUrl]} />
        <Testimonial data={HeroData?.[dashUrl]} /> */}
        {/* <Cta split /> */}
        {/* <Courses /> */}
        {/* <Approach /> */}
        <BookedClassesSection setIsLoading={props.setIsLoading} />
      </main>
      <Footer />
    </>
  );
};

export default BookedClasses;