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
import "./../components/elements/whatsapp.scss";

import * as React from "react";

import { callTrackHomepage, trackHomepge } from "../services/authroutes";

import Head from "next/head";
import { Loader } from "../components/loader";
import PropTypes from "prop-types";
import Script from "next/script";
import WhatsApp from "../components/elements/Whatsapp";
import { useRouter as useHistory } from "next/router";

// Client-side cache, shared for the whole session of the user in the browser.

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const history = useHistory();
  const [loading, setIsLoading] = React.useState(false);

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function success(pos) {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    callTrackHomepage({
      lat: crd.latitude,
      lon: crd.longitude,
      path: history.asPath,
    }).then((res) => {
      console.log(res);
    });
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  React.useEffect(() => {
    if (navigator.geolocation && process.env.NODE_ENV == "production") {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            // alert("Please enable location for best Experience!")
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      console.log("Sorry Not available!");
    }
  }, [history.asPath]);

  // React.useEffect(() => {
  //   trackHomepge().then((res) => {
  //     console.log(res);
  //     callTrackHomepage(res).then((res2) => {
  //       console.log(res2);
  //     });
  //   });
  // }, [history.asPath]);

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
        <script type="application/ld+json"></script>
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
      <WhatsApp />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
