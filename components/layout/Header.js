import React, { useEffect, useRef, useState } from "react";

import { Button } from "reactstrap";
import Link from "next/link";
import Logo from "./partials/Logo";
import MyImage from "../elements/MyImage";
import PropTypes from "prop-types";
import avatar from "./../../assets/images/avatar.svg";
import classNames from "classnames";
import { useRouter as useHistory } from "next/router";
import { verifyIsUserAuthenticated } from "../../utils/AppConstant";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  page,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);
  const history = useHistory();
  const nav = useRef(null);
  const hamburger = useRef(null);
  const [showUserInfo, setshowUserInfo] = useState(false);
  const loginArea = () => {
    return {
      label: !verifyIsUserAuthenticated() ? (
        <div>
          <Button
            onClick={() => {
              //document.querySelector("#howedoit").scrollIntoView();
              history.push("/sign-in");
              closeMenu();
            }}
            className="loginButton"
          >
            Login
          </Button>
        </div>
      ) : (
        <div
          onClick={() => {
            setshowUserInfo(!showUserInfo);
          }}
          style={{ position: "relative" }}
        >
          <MyImage src={avatar} width="40" />
          {showUserInfo && (
            <div className="userInfo avatar">
              <Button
                onClick={(e) => {
                  history.push("/profile");
                  closeMenu();
                  e.preventDefault();
                }}
              >
                User Dashboard
              </Button>
              <Button
                onClick={() => {
                  //document.querySelector("#howedoit").scrollIntoView();
                  localStorage.removeItem("auth-token");
                  localStorage.removeItem("username");
                  localStorage.removeItem("mobile");
                  history.push("/sign-in");
                  closeMenu();
                }}
                className="loginButton"
              >
                Log Out
              </Button>
            </div>
          )}
        </div>
      ),
    };
  };
  const highlightedCourseList = [
    {
      label: <span className="highlightedCourse">JEE</span>,
      onClick: (e) => {
        history.push("/courses/jee-mains-and-advanced(mh-cet-&-gcet)");
        closeMenu();
      },
    },
    {
      label: <span className="highlightedCourse">NEET</span>,
      onClick: (e) => {
        history.push("/courses/neet-ug");
        closeMenu();
      },
    },
    {
      label: <span className="highlightedCourse">Spoken English</span>,
      onClick: (e) => {
        history.push("/courses/spoken-english");
        closeMenu();
      },
    },
  ];
  const headerMapper = {
    home: [
      {
        label: "Why us?",
        onClick: () => {
          document.querySelector("#whyus").scrollIntoView();
          closeMenu();
        },
      },
      {
        label: "Courses",
        onClick: () => {
          document.querySelector("#courses").scrollIntoView();
          closeMenu();
        },
      },
      ...highlightedCourseList,
      loginArea(),
    ],
    login: [...highlightedCourseList, loginArea()],
    "sign-up": [...highlightedCourseList, loginArea()],
    "book-form": [...highlightedCourseList, loginArea()],
    "profile-page": [...highlightedCourseList, loginArea()],
    course: [...highlightedCourseList, loginArea()],
  };
  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    "site-header",
    bottomOuterDivider && "has-bottom-divider",
    className
  );

  return (
    <div {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-header-inner",
            bottomDivider && "has-bottom-divider"
          )}
        >
          <Logo />
          {!hideNav && (
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames("header-nav", isActive && "is-active")}
              >
                <div className={`header-nav-inner`}>
                  <ul
                    className={`${classNames(
                      "list-reset text-xs",
                      navPosition && `header-nav-${navPosition}`
                    )} ${!isActive ? "displaynone" : ""}`}
                  >
                    {headerMapper?.[page]?.map((item) => {
                      return (
                        <li key={`${item.label}`}>
                          <a
                            onClick={() => {
                              if (item.onClick) {
                                item.onClick();
                              }
                            }}
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
