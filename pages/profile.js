import React, { useEffect, useState } from "react";

import Profile from "../views/Profile";
import { useRouter as useHistory } from "next/router";

// import sections

const ProfilePage = (props) => {
  return <Profile setIsLoading={props.setIsLoading}/>;
};

export default ProfilePage;
