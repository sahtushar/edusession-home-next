import Image from "../elements/Image";
import MyImage from "../elements/MyImage";
import React from "react";
import SectionHeader from "./partials/SectionHeader";
import { SectionSplitProps } from "../../utils/SectionProps";
import classNames from "classnames";
import { map } from "lodash";
import pic1 from "./../../assets/images/19-1.png";
import pic2 from "./../../assets/images/20-1.png";
import pic3 from "./../../assets/images/18-1.png";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: <><i className="fa fa-child"></i>{" "}Why Choose Us?"</>,
    paragraph:
      "In this modern era of digitalization, we help your child to grow with a team of experts who create high-quality, engaging, and up-to-date educational content. We understand and respect that everyone has their own way and speed of learning so at Edusession we promote one to one learning concept. Our platform provides interactive learning experiences through quizzes, group discussions and other interactive activities that keep learners engaged and help them retain information better. ",
  };
  let mapper = [
    {
      icon: pic1,
      text: "Online Live One-to-one Classroom with Top Faculty",
      para: "EduSession believes in and respects the individualism of each student. To let the student study at their pace and savor the knowledge we provide one-to-one virtual classrooms. This environment allows the student to have personalized attention and interaction with their mentors. ",
    },
    {
      text: "Comprehensive Study Material for All Exams",
      icon: pic2,
      para: "Comprehensive study material is provided here, which contains the textbooks, model test papers, notes, and whatnot. This material acts as a tool to lead you in the right direction to organize your study for self-analysis. Plus it also assists you in cracking the exams smoothly and efficiently.",
    },
    {
      text: "AI-powered Test Series with Detailed Analysis",
      icon: pic3,
      para: "We here provide the most detailed performance analysis. With the aid of Artificial intelligence powered software, we not only update you with your scores but will give a perfect analysis of your strength, weakness, and hold over different subjects.",
    },
  ];

  const generateSlides = () => {
    let res = [];
    mapper.map((item) => {
      res.push({
        element: (
          <div className="split-item">
            <div
              className="split-item-content center-content-mobile"
              data-reveal-container=".split-item"
            >
              {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
          Lightning fast workflow
        </div> */}
              <h3 className="mt-0 mb-12">{item.text}</h3>
              <p className="m-0">{item.para}</p>
            </div>
            <div
              className={`${classNames(
                "split-item-image center-content-mobile",
                imageFill && "split-item-image-fill"
              )} featureTag`}
              data-reveal-container=".split-item"
            >
              <MyImage src={item.icon} alt="Features split 01" />
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
    <section {...props} className={outerClasses} id="whyus">
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            from="splitSection"
          />
          <div className={splitClasses}>
            {/* <Slider items={generateSlides()} /> */}
            {generateSlides()?.map((item) => item?.element)}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
