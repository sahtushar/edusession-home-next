import React, { useEffect, useRef, useState } from "react";
import {
  getCourseDataUrl,
  getLoginItems,
  isAdminCred,
  verifyIsUserAuthenticated,
} from "../../utils/AppConstant";

import { Button } from "reactstrap";
import CoursesDropDown from "../dropdownmenu";
import Link from "next/link";
import Logo from "./partials/Logo";
import MyImage from "../elements/MyImage";
import PropTypes from "prop-types";
import Router from "next/router";
import avatar from "./../../assets/images/avatar.svg";
import classNames from "classnames";

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
  cityData,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);
  const nav = useRef(null);
  const history = Router;
  const hamburger = useRef(null);
  const [showUserInfo, setshowUserInfo] = useState(false);
  const [username, setUserName] = useState("");

  useEffect(() => {
    setUserName(getLoginItems(window)?.email);
  }, []);

  const loginArea = () => {
    return {
      label: !verifyIsUserAuthenticated() ? (
        <div>
          <Button
            onClick={() => {
              //document.querySelector("#howedoit").scrollIntoView();
              // history.push("/sign-in");
              closeMenu();
            }}
            className="loginButton"
          >
            <Link href="/sign-in">Login</Link>
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
                  closeMenu();
                  e.preventDefault();
                }}
              >
                <Link
                  href={`/profile${
                    cityData?.cityData ? `?city=${cityData.city}` : ""
                  }`}
                >
                  User Dashboard
                </Link>
              </Button>
              <Button
                onClick={() => {
                  //document.querySelector("#howedoit").scrollIntoView();
                  localStorage.removeItem("auth-token");
                  localStorage.removeItem("username");
                  localStorage.removeItem("mobile");
                  //history.push("/sign-in");
                  closeMenu();
                }}
                className="loginButton"
              >
                <Link href="/sign-in">Log Out</Link>
              </Button>
            </div>
          )}
        </div>
      ),
    };
  };
  const highlightedCourseList = [
    {
      label: <span className="highlightedCourse">NDA <span style={{color:"brown"}}>(Newly Launched)</span></span>,
      onClick: (e) => {
        history.push(
          `/courses?course=${
            getCourseDataUrl["NDA (National Defence Academy)"]
          }${cityData?.cityData ? `&city=${cityData.city}` : ""}`
        );
        closeMenu();
      },
    },
    {
      label: <span className="highlightedCourse">JEE</span>,
      onClick: (e) => {
        history.push(
          `/courses?course=${
            getCourseDataUrl["JEE Mains and Advanced (MH-CET and GCET)"]
          }${cityData?.cityData ? `&city=${cityData.city}` : ""}`
        );
        closeMenu();
      },
    },
    {
      label: <span className="highlightedCourse">NEET</span>,
      onClick: (e) => {
        history.push(
          `/courses?course=${getCourseDataUrl["NEET UG"]}${
            cityData?.cityData ? `&city=${cityData.city}` : ""
          }`
        );
        closeMenu();
      },
    },
    {
      label: <span className="highlightedCourse">Spoken English</span>,
      onClick: (e) => {
        history.push(
          `/courses?course=${getCourseDataUrl["Spoken English"]}${
            cityData?.cityData ? `&city=${cityData.city}` : ""
          }`
        );
        closeMenu();
      },
    },
    {
      ...(isAdminCred(username)
        ? {
            label: <span className="highlightedCourse">Admin Panel</span>,
            onClick: (e) => {
              history.push("/booked-classes");
              closeMenu();
            },
          }
        : {}),
    },
    {
      ...(isAdminCred(username)
        ? {
            label: <span className="highlightedCourse">Feedback</span>,
            onClick: (e) => {
              history.push("/feedback");
              closeMenu();
            },
          }
        : {}),
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
    legal: [...highlightedCourseList, loginArea()],
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
    <header {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-header-inner",
            bottomDivider && "has-bottom-divider"
          )}
        >
          <Logo cityData={cityData} />
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
                    {headerMapper?.[page]?.map((item, index) => {
                      return (
                        <li key={`header_${index}`}>
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
                    {/* <li key={`header course`}>
                      <a>
                        {" "}
                        <CoursesDropDown />
                      </a>
                    </li> */}
                  </ul>
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
