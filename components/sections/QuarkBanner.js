import MyImage from "../elements/MyImage";
import React from "react";
import homepagebanner from "./../../assets/images/homepagebanner.png"
import mobilebitsbanner from "./../../assets/images/mobilebitsbanner.png"

export const QuarkEvent = ()=>{
    return <div className="quarkEvent">
       <MyImage className="fullquarkbanner" src={homepagebanner} alt="Bits-Quark-event" />
       {/* <MyImage className="mobilequarkbanner" src={mobilebitsbanner} alt="Bits-Quark-event" /> */}
    </div>
}
