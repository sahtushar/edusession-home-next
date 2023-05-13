import MyImage from "../elements/MyImage";
import PropTypes from "prop-types";
import React from "react";
import { SectionProps } from "../../utils/SectionProps";
import classNames from "classnames";
import result10 from "./../../assets/images/browser/10th results 2023.jpeg";
import result12 from "./../../assets/images/browser/12th board result.jpeg";
import { useRouter as useHistory } from "next/router";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
};

const Banners = ({
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
    "banners section",
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
      <div>
        <div className={innerClasses}>
            <div className="img1 dashed" >
             <MyImage src={result10} alt="12th results 2023" /> 
             <div className="firework"></div>
             <div className="firework"></div>
             <div className="firework"></div>
            </div>
            <div className="img1 dashed">
             <MyImage src={result12} alt="10th results 2023" /> 
             <div className="firework"></div>
             <div className="firework"></div>
             <div className="firework"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

Banners.propTypes = propTypes;
Banners.defaultProps = defaultProps;

export default Banners;
