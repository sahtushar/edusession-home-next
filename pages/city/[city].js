import React, { useEffect, useState } from "react";
import { activeCities, capitalize, cityPaths } from "../../utils/AppConstant";

import Home from "../../views/Home";
import { useRouter as useHistory } from "next/router";

const City = () => {
  const history = useHistory();
  const { city } = history?.query;
  useEffect(() => {
    if (!activeCities?.[city]) history.push("/");
  }, [city]);

  return (
    <Home
      city={capitalize(activeCities?.[city]?.display)}
      cityData={{ cityData: activeCities?.[city], city: city }}
    />
  );
};
export async function getStaticPaths() {
  return {
    paths: cityPaths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { city } = context.params;

  // const setIsLoading = props.setIsLoading;
  if (activeCities[city]) {
    //setIsLoading(false);
    return { props: { cityDetails: activeCities[city] } };
  }
}

export default City;
