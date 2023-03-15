import MyImage from "../elements/MyImage";
import React from "react";

//import "./../../assets/images/homepageicon.svg";
const ImageHover = ({ src,alt }) => {
  return (
    <div>
      {" "}
      <MyImage src={src} alt={alt}/>
    </div>
  );
};

export default ImageHover;
