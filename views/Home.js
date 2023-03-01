import React, { useEffect, useState } from "react";
import { activeCities, canonicalPath, capitalize } from "../utils/AppConstant";

import Approach from "../components/sections/Approach";
import Courses from "../components/sections/CoursesOverview";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import MyImage from "../components/elements/MyImage";
import Testimonial from "../components/sections/Testimonial";
import homepageicon from "./../assets/images/homepageicon.png";
import icon from "./../assets/images/icon.png";
import { useRouter as useHistory } from "next/router";

const Home = ({ city }) => {
  // const [city, setcity] = useState(city);
  const history = useHistory();

  let HeroData = {
    header: city
      ? `<span>
          Online Live <span style="color:#5658dd">One to One</span>
          Personalized Class around <span>${city}</span>
        </span>`
      : `<span>
        Online Live <span style="color:#5658dd">One to One</span>
        Personalized Class`,
    subheader: `<span>Get the best interactive personalized One-on-one sessions at your time
          and comfort with your preferred faculties for
          <span style="color:#5658dd">
            CBSE, ICSE, IB, State Board and Competitive examination
          </span>
          preparation.
          <span>Doubt clearance is now easy with focused one on one tuiton by best Online Tutors.</span><span>`,
    rightImg: homepageicon,
  };
  const getHelmetData = () => {
    return {
      title: city
        ? `Best Personalized and One to One Classes In ${city} | Edusession`
        : "One to One Online Classes for CBSE, ICSE, JEE, NEET, Spoken English",
      desc: city
        ? `Looking for Personalized and One to One Classes In ${city}? Book your Classes with Edusession to get the most experienced Tutors.Contact us to book your classes today.
        `
        : "Get One to One Online Tuitions from the best Instructors. Sign up now to get classes from highly qualified tutors for  JEE, NEET, Class 6 to 12, Spoken English, IELTS, CA & more",
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
      <Header navPosition="right" page="home" />
      <main className="site-content">
        <Hero
          className="illustration-section-01"
          data={HeroData}
          rightImg={homepageicon}
        />
        <FeaturesTiles className="illustration-section-01" />

        <FeaturesSplit
          invertMobile
          topDivider
          imageFill
          className="illustration-section-02"
        />
        {/*
         */}
        <Testimonial topDivider city={city} />
        {/* <Cta split /> */}
        <Courses city={city} className="illustration-section-01" />
        <Approach />
        <MyImage src={icon} style={{ display: "none" }} alt="Edusession Icon" />
      </main>
      <Footer city={city} />
    </>
  );
};

export default Home;
