import React, { useState } from "react";

import Button from "../elements/Button";
import ButtonGroup from "../elements/ButtonGroup";
import Image from "../elements/Image";
import ImageHover from "../3dhoverimage";
import Modal from "../elements/Modal";
import MoreCourses from "../elements/MoreCourses";
import { SectionProps } from "../../utils/SectionProps";
import classNames from "classnames";
import homepageicon from "./../../assets/images/homepageicon.png";
import { useRouter as useHistory } from "next/router";
import { verifyIsUserAuthenticated } from "../../utils/AppConstant";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  data,
  course,
  rightImg,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);
  const history = useHistory();
  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    bottomDivider && "has-bottom-divider"
  );

  const bookAClass = () => {
    if (verifyIsUserAuthenticated()) {
      if (course) history.push(`/book-form?course=${course}`);
      else history.push(`/book-form`);
    } else {
      history.push("/sign-in");
    }
  };

  return (
    <section {...props} className={`${outerClasses} homepagesection`}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className={`hero-content hero-content2`}>
            <div className="container-xs">
              <h1
                className="mt-0 mb-16"
                data-reveal-delay="200"
                dangerouslySetInnerHTML={{ __html: data?.header }}
              >
                {/* {data?.header} */}
              </h1>
              {data?.subheadertag =="h2" ? (
                <h2
                  className="m-0 mb-32 subheader"
                  data-reveal-delay="400"
                  dangerouslySetInnerHTML={{ __html: data?.subheader }}
                >
                  {/* {data?.subheader} */}
                </h2>
              ) : (
                <p
                  className="m-0 mb-32 subheader"
                  data-reveal-delay="400"
                  dangerouslySetInnerHTML={{ __html: data?.subheader }}
                >
                  {/* {data?.subheader} */}
                </p>
              )}

              <div className="ctaHomepage">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    onClick={() => {
                      bookAClass();
                    }}
                  >
                    Book a Class
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-sm">
        <div
          className="hero-figure illustration-element-01"
          data-reveal-value="20px"
          data-reveal-delay="800"
        >
          <ImageHover src={rightImg} />
          {/* <Image src={homepageicon} alt="Hero" /> */}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
