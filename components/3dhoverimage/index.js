import React from "react";
import MyImage from "../elements/MyImage";

//import "./../../assets/images/homepageicon.svg";
const ImageHover = ({ src }) => {
  return (
    <div>
      {" "}
      <MyImage src={src} />
    </div>
  );
};

export default ImageHover;
