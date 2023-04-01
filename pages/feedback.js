import React, { useEffect, useState } from "react";

import Feedback from "../views/Feedback";
import { useRouter as useHistory } from "next/router";

// import sections

const FeedbackR = (props) => {
  return <Feedback setIsLoading={props.setIsLoading} />;
};

export default FeedbackR;
