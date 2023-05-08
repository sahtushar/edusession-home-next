import React, { useEffect, useState } from "react";

import BookForm from "../components/sections/BookForm";
import ContactForm from "../components/sections/ContactForm";
import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/layout/Header";
import { canonicalPath } from "../utils/AppConstant";
import { useRouter as useHistory } from "next/router";

// import sections

const ContactFormView = (props) => {
  const getHelmetData = () => {
    return {
      title: `Edusession Contact Form - Promo`,
      desc: "Get One to One Online Tuitions from the best Instructors. Sign up now to get classes from highly qualified tutors for  JEE, NEET, Class 6 to 12, Spoken English, IELTS, CA & more",
    };
  };

  const history = useHistory();
  const cityData = props.cityData;

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
        <ContactForm
          course={props.course}
          setIsLoading={props.setIsLoading}
          cityData={cityData}
        />
      </main>
      <Footer cityData={cityData} />
    </>
  );
};

export default ContactFormView;
