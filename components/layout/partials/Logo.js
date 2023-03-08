import { Link, useRouter as useHistory } from "next/router";

import Image from "next/future/image";
import ImageHover from "../../3dhoverimage";
import MyImage from "../../elements/MyImage";
import React from "react";
import classNames from "classnames";
import logo from "./../../../assets/images/logo-no-background.png";

//import Image from "../../elements/Image";

const Logo = ({ className, cityData, ...props }) => {
  const classes = classNames("brand", className);
  const history = useHistory();
  return (
    <div {...props} className={classes}>
      <h3 className="mt-5">
        <a
          onClick={() => {
            history.push(`/${cityData?.cityData ? `/city/${cityData?.city}` : ""}`);
          }}
        >
          <MyImage src={logo} alt="Open" width="210" layout="raw" />
        </a>
      </h3>
    </div>
  );
};

export default Logo;
