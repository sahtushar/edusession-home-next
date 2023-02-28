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
