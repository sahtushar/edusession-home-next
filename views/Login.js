import React, { useEffect, useState } from "react";
import { canonicalPath, verifyIsUserAuthenticated } from "../utils/AppConstant";

import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/layout/Header";
import SignInForm from "../components/sections/SignInForm";
import { useRouter as useHistory } from "next/router";

const SignIn = (props) => {
  const [course, setcourse] = useState("");
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (verifyIsUserAuthenticated()) {
      history.push("/");
    }
    const { firstTime } = history.query;
    setIsAccountCreated(firstTime);
  }, [history.pathname]);

  const getHelmetData = () => {
    return {
      title: `Book Online One to One Class | Edusession Login`,
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
        <meta
          itemprop="name"
          content={getHelmetData().title}
        />
        <meta
          itemprop="description"
          content={getHelmetData().desc}
        />
      </Head>
      <Header navPosition="right" page="login" />
      <main className="site-content">
        {/* <Hero className="illustration-section-01" data={HeroData?.[dashUrl]} /> */}
        {/* <Hero className="illustration-section-01" data={HeroData?.[dashUrl]} />
        <CourseIntro data={HeroData?.[dashUrl]} />
        <FAQ data={HeroData?.[dashUrl]} />
        <Testimonial data={HeroData?.[dashUrl]} /> */}
        {/* <Cta split /> */}
        {/* <Courses /> */}
        {/* <Approach /> */}
        <SignInForm
          course={course}
          isAccountCreated={isAccountCreated}
          {...props}
        />
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
