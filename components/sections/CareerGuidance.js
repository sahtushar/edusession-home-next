import PropTypes from "prop-types";
import React from "react";
import { SectionProps } from "../../utils/SectionProps";
import classNames from "classnames";
import { useRouter as useHistory } from "next/router";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
};

const CareerGuidance = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "section",
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

  const history = useHistory();

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
            
        </div>
      </div>
    </section>
  );
};

CareerGuidance.propTypes = propTypes;
CareerGuidance.defaultProps = defaultProps;

export default CareerGuidance;
