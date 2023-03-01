import PropTypes from "prop-types";
import React from "react";
import SectionHeader from "./partials/SectionHeader";
import { SectionProps } from "../../utils/SectionProps";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
};

const CourseIntro = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  data,
  courseIdentifier,
  setIsLoading,
  ...props
}) => {
  const outerClasses = classNames(
    "course-intro section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );
  const sectionHeader = {
    title: data?.title,
    paragraph: data?.description,
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container courseIntroWrapper">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            from="courseIntro"
          />
          <div className="container">
            <article className="introsection">
              {data?.sections?.map((item) => {
                return (
                  <>
                    <h2>{item.title}</h2>
                    {item?.content?.match(/<div>/) ? (
                      <div dangerouslySetInnerHTML={{ __html: item.content }} />
                    ) : (
                      <p>{item?.content}</p>
                    )}

                    <div style={{ marginLeft: "10px" }}>
                      {item?.subsections?.map((item2) => {
                        return (
                          <>
                            <h3>{item2.title}</h3>
                            {item2?.content?.match(/<div>/) ? (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item2.content,
                                }}
                              />
                            ) : (
                              <p>{item2?.content}</p>
                            )}
                          </>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

CourseIntro.propTypes = propTypes;
CourseIntro.defaultProps = defaultProps;

export default CourseIntro;
