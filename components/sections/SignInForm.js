import React, { useState } from "react";

import { Loader } from "../loader";
import PropTypes from "prop-types";
import { SectionProps } from "../../utils/SectionProps";
import { callSignIn } from "../../services/authroutes";
import classNames from "classnames";
import { setLoginItems } from "../../utils/AppConstant";
import { useRouter as useHistory } from "next/router";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
};

const SignInForm = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  isAccountCreated,
  loading,
  setIsLoading,
  firstTime,
  ...props
}) => {
  const outerClasses = classNames(
    "signinWrapper section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    let body = {
      username: email,
      password: password,
    };
    try {
      setIsLoading(true);
      const res = await callSignIn(body);

      if (res.status == 200 || res.data.status == 200) {
        //loggedIn
        setError(false);
        setIsLoading(false);
        setLoginItems(res, window, localStorage);
        history.push("/book-form");
      }
    } catch (e) {
      setError(true);
      setIsLoading(false);
      console.log(e.message);
    }
  };
  const changeMapper = {
    username: {
      callback: setemail,
      state: email,
    },

    password: {
      callback: setpassword,
      state: password,
    },
  };
  const onChange = (e, type) => {
    changeMapper[type].callback(e.target.value);
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="form">
            <h1>
              Sign In For <span style={{ color: "#5658dd" }}>Edusession</span>
            </h1>
            {isAccountCreated ? (
              <p className="accountCreated">
                Welcome to <span style={{ color: "#5658dd" }}>Edusession</span>.
                Please proceed with the credentials.
              </p>
            ) : (
              <></>
            )}
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  onChange(e, "username");
                }}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  onChange(e, "password");
                }}
              />
            </div>

            <div className="d-grid">
              <button
                onClick={(e) => {
                  onSubmit(e);
                }}
                type="submit"
                className="btn btn-primary themebutton"
              >
                Sign In
              </button>
              {error && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  Username/password is wrong/mismtach{" "}
                </p>
              )}
            </div>
            {/* <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p> */}
            <div className="createaccount">
              <p>Or Create Your Account </p>
              <button
                className="btn btn-primary green"
                onClick={() => {
                  history.push("/sign-up");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SignInForm.propTypes = propTypes;
SignInForm.defaultProps = defaultProps;

export default SignInForm;
