import React, { useState } from "react";

import PropTypes from "prop-types";
import { SectionProps } from "../../utils/SectionProps";
import { callSignUp } from "../../services/authroutes";
import classNames from "classnames";
import { useRouter as useHistory } from "next/router";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
};

const SignUp = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  loading,
  setIsLoading,
  ...props
}) => {
  const outerClasses = classNames(
    "signup section",
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

  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [mobile, setmobile] = useState("");
  const history = useHistory();
  const [error, setError] = useState(false);

  const changeMapper = {
    name: {
      callback: setname,
      state: name,
    },
    email: {
      callback: setemail,
      state: email,
    },
    mobile: {
      callback: setmobile,
      state: mobile,
    },
    password: {
      callback: setpassword,
      state: password,
    },
    confirmpassword: {
      callback: setconfirmpassword,
      state: confirmpassword,
    },
  };
  const onChange = (e, type) => {
    if (type == "name") changeMapper[type].callback(e.target.value);
    else changeMapper[type].callback(e.target.value.trim());
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email?.trim() || !password?.trim()) {
      setError("Please fill all the relevant information.");
      return;
    } else if (password.length < 6) {
      setError("Pasword length should be minimum of 6.");
      return;
    } else if (password !== confirmpassword) {
      setError("Entererd passwords are not matching.");
      return;
    }

    setError(false);
    let body = {
      username: email,
      email: email,
      password: password,
      name: name,
      mobile: mobile,
      roles: ["user"],
    };
    try {
      setIsLoading(true);
      const res = await callSignUp(body);
      setIsLoading(false);
      if (res.status == 200 || res.data.status == 200) {
        history.push("/sign-in?firstTime=true");
      }
    } catch (e) {
      setIsLoading(false);
      if (e?.response?.status == 400 || e?.response?.data?.status == 400) {
        setError("User may be already registered. Please Log in.");
      }
      console.log(e.message);
    }
  };
  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="sign-upWrapper">
            <div class="form-box sign-up-box">
              <h1>
                <i className="fa fa-user-plus"></i> Sign Up For{" "}
                <span style={{ color: "#5658dd" }}>Edusession</span>
              </h1>

              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    onChange(e, "email");
                  }}
                />
              </div>
              <div className="mb-3">
                <label>Mobile</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter mobile no"
                  value={mobile}
                  maxLength={13}
                  onChange={(e) => {
                    onChange(e, "mobile");
                  }}
                />
              </div>
              <div className="mb-3">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  placeholder="Enter Full Name"
                  onChange={(e) => {
                    onChange(e, "name");
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
              <div className="mb-3">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  value={confirmpassword}
                  onChange={(e) => {
                    onChange(e, "confirmpassword");
                  }}
                />
              </div>

              <input
                class="submit-btn"
                type="submit"
                onClick={(e) => {
                  onSubmit(e);
                }}
                value="Sign up"
              />
              {error && (
                <p style={{ color: "red", marginTop: "5px" }}>{error}</p>
              )}
              <p class="text-1">
                Already a member?{" "}
                <span
                  onClick={() => {
                    history.push("/sign-in");
                  }}
                  class="sign-in-btn"
                >
                  Sign in
                </span>
              </p>
              <p class="text-1">
                By Signing Up you agree to all our Policy, Disclaimer, Terms and
                conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SignUp.propTypes = propTypes;
SignUp.defaultProps = defaultProps;

export default SignUp;
