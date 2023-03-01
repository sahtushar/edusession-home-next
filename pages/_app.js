import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import "./../components/sections/styles.css";
import "./../assets/scss/style.scss";
import "./../components/sections/coursestyles.scss";
import "./../components/sections/bookform.scss";
import "./../components/sections/signin.scss";
import "./../components/loader/styles.scss";
import "./../components/sections/sign-up.scss";
import "./../components/sections/legal.scss";
import "./../components/sections/profilepage.scss";

import * as React from "react";

import Head from "next/head";
import { Loader } from "../components/loader";
import PropTypes from "prop-types";
import Script from "next/script";

// Client-side cache, shared for the whole session of the user in the browser.


export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [loading, setIsLoading] = React.useState(false);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
          <meta charset="utf-8" />
          <link
            rel="shortcut icon"
            href="https://edusession.live/_next/static/media/logo-no-background.7c66c390.png"
          />
          <link
            rel="icon"
            href="https://edusession.live/_next/static/media/logo-no-background.7c66c390.png"
            sizes="32x32"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          />
          <meta name="theme-color" content="#000000" />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="One to One Online Classes for IGCSE, CBSE, ICSE, JEE, NEET, Spoken English etc"
          />
          <meta
            property="og:description"
            content="Get One to One Online Tuitions from the best Instructors. Sign up now to get classes from highly qualified tutors for  JEE, NEET, Class 6 to 12, Spoken English, IELTS, CA & more"
          />
          <meta property="og:url" content="https://edusession.live/" />
          <meta property="og:site_name" content="Edusession Online Classes" />
          {/* <!-- <meta
      property="article:publisher"
      content="https://www.facebook.com/Sphinx-Computers-Co-105777477814779/?modal=admin_todo_tour"
    /> --> */}
          <meta
            property="article:modified_time"
            content="2023-01-18T18:30:05+00:00"
          />
          <meta
            property="og:image"
            content="https://edusession.live/_next/static/media/logo-no-background.7c66c390.png"
          />
          <meta
            itemprop="name"
            content="One to One Online Classes for IGCSE, CBSE, ICSE, JEE, NEET, Spoken English etc"
          />
          <meta
            itemprop="description"
            content="Get One to One Online Tuitions from the best Instructors. Sign up now to get classes from highly qualified tutors for  JEE, NEET, Class 6 to 12, Spoken English, IELTS, CA & more"
          />
          <meta
            itemprop="image"
            content="https://edusession.live/_next/static/media/logo-no-background.7c66c390.png"
          />
          <link
            rel="icon"
            href="https://edusession.live/_next/static/media/logo-no-background.7c66c390.png"
            sizes="192x192"
          />
          <link
            rel="apple-touch-icon"
            href="https://edusession.live/_next/static/media/logo-no-background.7c66c390.png"
          />
          <meta
            name="msapplication-TileImage"
            content="https://edusession.live/_next/static/media/logo-no-background.7c66c390.png"
          />
      </Head>

      <Component {...pageProps} setIsLoading={setIsLoading} />
      {loading && <Loader />}
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
