import React, { useEffect, useState } from "react";

import Signup from "../views/signup";
import { useRouter as useHistory } from "next/router";

const SignUpPage = (props) => {
  return <Signup setIsLoading={props.setIsLoading}/>;
};

export default SignUpPage;
