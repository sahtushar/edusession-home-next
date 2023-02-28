import React, { useState } from "react";

import { HashRouter as Router, Route } from "react-router-dom";
import { Loader } from "../components/loader";
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  Layout = Layout === undefined ? (props) => <>{props.children}</> : Layout;
  const [loading, setIsLoading] = useState(false);

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} loading={loading} setIsLoading={setIsLoading} />
          {loading && <Loader />}
        </Layout>
      )}
    />
  );
};

export default AppRoute;
