import React from "react";
import { removeSpacesAndReplaceSymbols } from "../../utils/AppConstant";
import { useRouter as useHistory } from "next/router";

const Footer = ({ city }) => {
  let competitveExam = [
    { text: "CA Foundation and Intermediate" },
    { text: "IELTS (UKVI - Academic - General)" },
    { text: "JEE Mains and Advanced(MH-CET and GCET)" },
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
      return `Edusession is an online one-to-one personalized platform that
      offers live courses for students from grades 6 to 12, as well as
      JEE, NEET, English proficiency, CA, graduation, and more with great 
      presence in ${city} and around with
      live courses taught by experienced educators and flexible
      scheduling, Edusession empowers learners to achieve their academic
      goals and excel in their chosen fields.{" "}`;
    } else {
      return `Edusession is an online one-to-one personalized platform that 
      offers live courses for students from grades 6 to 12, as well as JEE, NEET, 
      English proficiency, CA, graduation, and more. With live courses taught by 
      experienced educators and flexible scheduling, Edusession empowers learners to 
      achieve their academic goals and excel in their chosen fields.`;
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
    <div className="footerWrapper">
      <footer>
        <div className="container">
          <div className="sec aboutus">
            <h4>About Us</h4>
            <p>{getFooterDesc()}</p>
            <ul className="sci">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100088054445822"
                  target={"_blank"}
                >
                  <i className="fa fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/edusession_official/"
                  target={"_blank"}
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCWUuKRZJIvnQx-pHDR58CNg"
                  target={"_blank"}
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
                  <li
                    onClick={() => {
                      history.push(
                        `/book-form?course=${removeSpacesAndReplaceSymbols(item.text)}`
                      );
                    }}
                  >
                    {item.text.trim()}
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
                  <li
                    onClick={() => {
                      history.push(`/book-form?course=spoken-english`);
                    }}
                  >
                    {item.text.trim()}
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
                  <li
                    onClick={() => {
                      history.push(
                        `/book-form?course=${removeSpacesAndReplaceSymbols(
                          item.text
                        )}`
                      );
                    }}
                  >
                    {item.text.trim()}
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
      </footer>
      <div class="copyrightText">
        <p>Copyright © 2023 Edusession. All Rights Reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
