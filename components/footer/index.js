import { activeCities, getCourseDataUrl } from "../../utils/AppConstant";

import Link from "next/link";
import React from "react";
import { useRouter as useHistory } from "next/router";

const Footer = ({ city, cityData }) => {
  let competitveExam = [
    { text: "CA Foundation and Intermediate" },
    { text: "IELTS (UKVI - Academic - General)" },
    { text: "JEE Mains and Advanced (MH-CET and GCET)" },
    { text: "NEET UG" },
  ];
  let spokenEnglish = [
    { text: "Spoken English" },
    { text: "Personality Development" },
    { text: "Mock interviews" },
    { text: "Vocabulary" },
    { text: "Professional Development" },
  ];

  const history = useHistory();
  const getFooterDesc = () => {
    if (city) {
      return `Edusession Live is an online one to one personalized platform that
      offers live online one on one tuitions for students from Class 6 to 12, as well as
      JEE, NEET, Spoken English, CA, graduation, and more with great 
      presence in ${city} and around with
      live courses taught by experienced tutors and flexible
      scheduling, Edusession empowers learners to achieve their academic
      goals and excel in their chosen fields by attending our classes.`;
    } else {
      return `Edusession Live is an online one to one live personalized platform based out of Goa and functional all over India, we 
      offers live online one on one tuitions for students from Class 6 to 12, as well as JEE, NEET, 
      Spoken English, CA, graduation, and more. With live courses taught by 
      experienced tutors and flexible scheduling, Edusession empowers learners to 
      achieve their academic goals and excel in their chosen fields by attending our classes.`;
    }
  };
  // let competitveExam=[
  //   {
  //      text:"CA Foundation & Intermediate"
  //   }
  //   {
  //     text:
  //   }
  // ]

  // <ul>
  {
    /* 
              <li>
                <a href="#">IELTS</a>
              </li>
              <li>
                <a href="#">JEE Mains & Advance; </a>
              </li>
              <li>
                <a href="#">MH-CET/GCET</a>
              </li>
              <li>
                <a href="#">NEET UG</a>
              </li>
            </ul> */
  }
  let classes = [
    { text: "Class 6" },
    { text: "Class 7" },
    { text: "Class 8" },
    { text: "Class 9" },
    { text: "Class 10" },
    { text: "Class 11" },
    { text: "Class 12" },
    { text: "JEE Foundation" },
  ];

  const onClick = () => {
    history.push("/legal");
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="sec aboutus">
            <h4>About Us</h4>
            <p>{getFooterDesc()}</p>
            <ul className="sci">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100088054445822"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/edusession_official/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCWUuKRZJIvnQx-pHDR58CNg"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i className="fa fa-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quicklinks">
            <h4>Competitive Exams</h4>
            <ul>
              {competitveExam.map((item) => {
                return (
                  <li>
                    <Link
                      href={`/book-form?course=${getCourseDataUrl[item.text]}${
                        cityData?.cityData ? `&city=${cityData?.city}` : ""
                      }`}
                    >
                      {item.text.trim()}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sec quicklinks">
            <h4>English</h4>
            <ul>
              {spokenEnglish.map((item) => {
                return (
                  <li>
                    <Link
                      href={`/book-form?course=spoken-english${
                        cityData?.cityData ? `&city=${cityData?.city}` : ""
                      }`}
                    >
                      {item.text.trim()}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sec quicklinks">
            <h4>Classes</h4>
            <ul>
              {classes.map((item) => {
                return (
                  <li>
                    <Link
                      href={`/book-form?course=${getCourseDataUrl[item.text]}${
                        cityData?.cityData ? `&city=${cityData?.city}` : ""
                      }`}
                    >
                      {item.text.trim()}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sec quicklinks">
            <h4>Useful Links</h4>
            <ul>
              <li
                onClick={() => {
                  onClick();
                }}
              >
                Disclaimer
              </li>
              <li
                onClick={() => {
                  onClick();
                }}
              >
                Terms of Service
              </li>
              <li
                onClick={() => {
                  onClick();
                }}
              >
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
        <div className="copyrightText">
          <div className="sec quicklinks cities">
            {/* <h4>Cities and state we operate</h4> */}
            <ul>
              {Object.keys(activeCities).map((item) => {
                return (
                  <li>
                    <Link href={`/city/${item}`}>
                      {activeCities[item].display}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* <ul>
              <li
                onClick={() => {
                  onClick();
                }}
              >
                Disclaimer
              </li>
              <li
                onClick={() => {
                  onClick();
                }}
              >
                Terms of Service
              </li>
              <li
                onClick={() => {
                  onClick();
                }}
              >
                Privacy Policy
              </li>
            </ul> */}
          </div>
          <p>
            Copyright © 2023 Edusession. All Rights Reserved. For any query,
            Contact us at <span>+91 82378 15800</span>
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
