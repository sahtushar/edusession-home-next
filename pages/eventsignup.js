import  ""

import React, { useEffect, useState } from "react";

import EventSignUp from "../views/EventSignup";

const EventSignUpPage = (props) => {
  return <EventSignUp setIsLoading={props.setIsLoading}/>;
};

export default EventSignUpPage;
