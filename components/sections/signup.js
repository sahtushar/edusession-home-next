import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
};

const signup = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "section",
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

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
            <div className="sign-upWrapper">
            <div class="form-box sign-up-box">
            <h2>Sign up</h2>
            <div class="login-options">
                <div class="other-logins">
                    <a href=""><img src="C:/Users/laksh/Downloads/search.png" alt=""/></a>
                    <a href=""><img src="C:/Users/laksh/Downloads/facebook.png" alt=""/></a>
                    <a href=""><img src="C:/Users/laksh/Downloads/github.png" alt=""/></a>
                </div>
                <p class="text">Or, sign up with email...</p>
            </div>
            <form action="">
                <div class="field">
                    <i class="uil uil-at"></i>
                     {/* <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="30px" width="30px">
                        <path fill="#828da0"
                            d="M12,2a10,10,0,1,0,5,18.66,1,1,0,1,0-1-1.73A8,8,0,1,1,20,12v.75a1.75,1.75,0,0,1-3.5,0V8.5a1,1,0,0,0-1-1,1,1,0,0,0-1,.79A4.45,4.45,0,0,0,12,7.5,4.5,4.5,0,1,0,15.3,15,3.74,3.74,0,0,0,22,12.75V12A10,10,0,0,0,12,2Zm0,12.5A2.5,2.5,0,1,1,14.5,12,2.5,2.5,0,0,1,12,14.5Z" />
                    </svg> */}
                    <input type="email" placeholder="Email ID" required/>
                </div>
                <div class="field">
                    <i class="uil uil-user"></i>
                     {/* <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="30px" width="30px">
                        <path fill="#828da0"
                            d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z" />
                    </svg> */}
                    <input type="text" placeholder="Full name" required/>
                </div>
                <div class="field">
                    <i class="uil uil-lock-alt"></i>
                     {/* <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="30px" width="30px">
                        <path fill="#828da0"
                            d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
                    </svg> */}
                    <input type="password" placeholder="Password" required/>
                </div>
                <div class="field">
                    <i class="uil uil-lock-access"></i>
                     {/* <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="30px" width="30px">
                        <path fill="#828da0"
                            d="M21,2H15a1,1,0,0,0,0,2h5V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21,2Zm0,12a1,1,0,0,0-1,1v5H15a1,1,0,0,0,0,2h6a1,1,0,0,0,1-1V15A1,1,0,0,0,21,14ZM12,6A3,3,0,0,0,9,9v1a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V12a2,2,0,0,0-2-2V9A3,3,0,0,0,12,6ZM11,9a1,1,0,0,1,2,0v1H11Zm4,7H9V12h6ZM3,10A1,1,0,0,0,4,9V4H9A1,1,0,0,0,9,2H3A1,1,0,0,0,2,3V9A1,1,0,0,0,3,10ZM9,20H4V15a1,1,0,0,0-2,0v6a1,1,0,0,0,1,1H9a1,1,0,0,0,0-2Z" />
                    </svg>  */}
                    <input type="password" placeholder="Confirm password" required/>
                </div>
                <input class="submit-btn" type="submit" value="Sign up"/>
            </form>
            <p class="text-1">Already a member? <span class="sign-in-btn">Sign in</span></p>
        </div>
            </div>
        </div>
      </div>
    </section>
  );
};

signup.propTypes = propTypes;
signup.defaultProps = defaultProps;

export default signup;