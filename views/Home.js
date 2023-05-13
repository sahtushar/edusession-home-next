import React, { useEffect, useState } from "react";
import {
  activeCities,
  canonicalPath,
  capitalize,
  homepagestructuredata,
} from "../utils/AppConstant";

import Approach from "../components/sections/Approach";
import Banners from "../components/sections/Banners";
import Courses from "../components/sections/CoursesOverview";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import MyImage from "../components/elements/MyImage";
import PromoModal from "../components/elements/PromoModal";
import StructuredData from "../components/elements/StructuredData";
import Testimonial from "../components/sections/Testimonial";
import homepageicon from "./../assets/images/homepageicon.png";
import icon from "./../assets/images/icon.png";
import img from "./../assets/images/spoken-en-promo.jpeg";
import { useRouter as useHistory } from "next/router";

const Home = ({ city, cityData }) => {
  // const [city, setcity] = useState(city);
  const history = useHistory();

  let HeroData = {
    header: city
      ? `<span>
          Online Live <span style="color:#5658dd">One to One</span>
          Personalized Class</span>
        </span>`
      : `<span>
        Online Live <span style="color:#5658dd">One to One</span>
        Personalized Class`,
    subheader: `<span>Get the best interactive personalized One-on-one sessions at your time
          and comfort with your preferred faculties for
          <span style="color:#5658dd">
            CBSE, ICSE, JEE, NDA, NEET, State Board, Spoken English, IELTS and Competitive examinations
          </span>
          preparation.
          <span>Doubt clearance is now easy with focused 1-on-1 tuition by best Online Tutors</span><span>`,
    rightImg: homepageicon,
    subheadertag: "h2",
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
      <PromoModal promoimg={img} link={"/courses?course=spoken-english"} timeout="3000"/>
      <StructuredData data={homepagestructuredata} />
      <Head>
        <meta charSet="utf-8" />
        <title>{getHelmetData().title}</title>
        <meta name="description" content={getHelmetData().desc} />
        <link rel="canonical" href={canonicalPath(history.asPath)} />
        <meta property="og:title" content={getHelmetData().title} />
        <meta property="og:description" content={getHelmetData().desc} />
        <meta itemprop="name" content={getHelmetData().title} />
        <meta itemprop="description" content={getHelmetData().desc} />
        <meta property="og:url" content={canonicalPath(history.asPath)} />
      </Head>
      <Header navPosition="right" page="home" cityData={cityData} />
      <main className="site-content">
      <Banners/>
        <Hero
          className="illustration-section-01"
          data={HeroData}
          cityData={cityData}
          rightImg={homepageicon}
          courseIdentifier="homepage"
        />
      
        <FeaturesTiles
          className="illustration-section-01"
          cityData={cityData}
        />

        <FeaturesSplit
          invertMobile
          topDivider
          imageFill
          className="illustration-section-02"
        />
        {/*
         */}
        <Testimonial
          topDivider
          city={city}
          className="illustration-section-01"
        />
        {/* <Cta split /> 
        //<Courses
         // city={city}
         // className="illustration-section-01"
         // cityData={cityData}
        // />
        */}
        <Approach className="illustration-section-02" />
        <MyImage src={icon} style={{ display: "none" }} alt="Edusession Icon" />
      </main>
      <Footer city={city} cityData={cityData} />
    </>
  );
};

export default Home;
