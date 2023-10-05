import React, { useEffect, useState } from "react";

import Login from "../views/Login";
import { useRouter as useHistory } from "next/router";

// import sections

const SignInPage = (props) => {
  return <Login setIsLoading={props.setIsLoading}/>;
};

export default SignInPage;
