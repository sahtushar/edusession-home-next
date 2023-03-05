import MyImage from "../elements/MyImage";
import React from "react";
import SectionHeader from "./partials/SectionHeader";
import { SectionTilesProps } from "../../utils/SectionProps";
import classNames from "classnames";
import pic1 from "./../../assets/images/Divishka-Pereira.png";
import pic2 from "./../../assets/images/Arshin-Khan-679x1024.jpg";
import pic3 from "./../../assets/images/Sonu-sharma.jpg";
import pic4 from "./../../assets/images/Bhavesh-naik-834x1024.jpg";
import pic5 from "./../../assets/images/cyril.png";
import pic6 from "./../../assets/images/rujesh.png";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  city,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: <><i className="fa fa-users"></i>{" "}Students testimonials</>,
    paragraph: city
      ? `We Provide Our Students in ${city} with the best Possible Guidance`
      : `We Provide Our Students with the best Possible Guidance`,
  };
  const mapper = [
    {
      revealType: "reveal-from-right",
      name: "Divishka Pereira",
      type: "student",
      review: `Understanding the fundamentals and formulas of physics and chemistry has always been tough for me. Although after attending classes from Edu- session all my doubts have been cleared. 
      And I also learned interesting ways to handle these tiring and typical subjects.`,
      img: pic1,
    },
    {
      revealType: "reveal-from-right",
      name: "Arshin Khan",
      type: "student",
      review: `As a student of the EDU session, the classes are very helpful and it helps to clear all my doubts.`,
      img: pic2,
    },
    // Yash Harijan
    // Student

    // All doubts are cleared then and there only.

    // VM20506:1 Rujesh Raikar
    // Student

    // Best Learning Method Doubt clearance Good interaction with the students.
    // VM20506:1 Cyril

    // Student

    // It’s Really a good platform for fixing your child at a personal level and bringing them to a stage where they can be par with others and even better and become a better person as oneself. Though I would recommend taking homeschooling for this coaching it will be more comfortable and applicable.
    {
      revealType: "reveal-from-right",
      name: "Sonu Sharma",
      type: "student",
      review: `My child gets personal attention, which I liked the most about them.`,
      img: pic3,
    },
    {
      revealType: "reveal-from-left",
      name: "Bhavesh Naik",
      type: "student",
      review: `
      The interface is very useful and easy to use, and it helps my child in his study. Gives him personal attention. clears all his doubts. Tests are taken which checks his progress..`,
      img: pic4,
    },
    {
      revealType: "reveal-from-left",
      name: "Cyril",
      type: "student",
      review: `
      It’s Really a good platform for fixing your child at a personal level and bringing them to a stage where they can be par with others and even better and become a better person as oneself. Though I would recommend taking homeschooling for this coaching it will be more comfortable and applicable.`,
      img: pic5,
    },
    {
      revealType: "reveal-from-left",
      name: "Rujesh Raikar",
      type: "student",
      review: `
      Best Learning Method Doubt clearance Good interaction with the students.`,
      img: pic6,
    },
  ];

  const generateSlides = () => {
    let res = [];
    mapper.map((item) => {
      res.push({
        element: (
          <div
            className={`tiles-item`}
            data-reveal-delay="200"
          >
            <div className="tiles-item-inner">
              <div className="testimonial-item-content">
                <p className="text-sm mb-0">— {item.review}</p>
              </div>
              <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                <div className="reviewUser">
                  <span className="testimonial-item-name text-color-high">
                    {item.name}
                  </span>
                  <div>
                    <p className="text-sm mb-0">{item.type}</p>
                  </div>
                </div>
                <MyImage src={item.img} />
                {/* <span className="text-color-low"> / </span> */}
                {/* <span className="testimonial-item-link">
                <a href="#0">AppName</a>
              </span> */}
              </div>
            </div>
          </div>
        ),
        caption: item.text,
        img: item.icon,
      });
    });
    return res;
  };

  return (
    <section
      {...props}
      className={`${outerClasses} testimonialPage`}
      id="testimonial"
    >
      <div className="container">
        {/* <AnimatedBg /> */}
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            from="testimonialPage"
          />
          <div className={tilesClasses}>
            {generateSlides().map((item) => {
              return item.element;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
