import React, { useEffect, useState } from "react";

import CareerGuidanceView from "../views/CareerGuidance";
import { useRouter as useHistory } from "next/router";

// import sections

const CareerGuidancePage = (props) => {
  return <CareerGuidanceView setIsLoading={props.setIsLoading} />;
};

export default CareerGuidancePage;
