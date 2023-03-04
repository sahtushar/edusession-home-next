import Image from "../elements/Image";
import MoreCourses from "../elements/MoreCourses";
import MyImage from "../elements/MyImage";
import React from "react";
import SectionHeader from "./partials/SectionHeader";
import { SectionTilesProps } from "../../utils/SectionProps";
import bank from "./../../assets/images/bank.webp";
import classNames from "classnames";
import government from "./../../assets/images/government.webp";
import note from "./../../assets/images/note.webp";
import rail from "./../../assets/images/rail.webp";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: (
      <>
        <i className="fa fa-bar-chart"></i>{" "}9000+ Sessions Conducted
      </>
    ),
    paragraph:
      "Our live online one-to-one educational institute offers personalized, real-time learning experiences with expert instructors",
  };

  let mapper = [
    {
      header: "9000+",
      icon: note,
      text: "Sessions Conducted & Counting",
    },
    {
      header: "71%",
      text: "Rise In Productively and Consistency",
      icon: bank,
    },
    {
      header: "83%",
      text: "Increase in Concept Clarity",
      icon: rail,
    },
    {
      header: "100%",
      text: "Support in Career Guidance & Exposure to Extracurriculars",
      icon: government,
    },
  ];

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <MoreCourses
            header={
              <>
                Courses by <span style={{ color: "#5658dd" }}>Edusession</span>
              </>
            }
          />
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            from="featureTiles"
          />
          <div className={`${tilesClasses} featureListings`}>
            {mapper.map((item) => {
              return (
                <div className="tiles-item">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                        <MyImage
                          src={item.icon}
                          alt="Features tile icon 01"
                          width={64}
                          height={64}
                        />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">{item.header}</h4>
                      <p className="m-0 text-sm">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
