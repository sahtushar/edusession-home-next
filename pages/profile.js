import React, { useEffect, useState } from "react";

import Profile from "../views/Profile";
import { activeCities } from "../utils/AppConstant";
import { useRouter as useHistory } from "next/router";

// import sections

const ProfilePage = (props) => {
  const history = useHistory();
  const { city } = history.query;
  return (
    <Profile
      setIsLoading={props.setIsLoading}
      cityData={{ cityData: activeCities?.[city], city: city }}
    />
  );
};

export default ProfilePage;
