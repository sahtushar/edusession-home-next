import {
  COURSES_GRADES,
  SUBJECTS,
  checkauth,
  checkauthfailed,
  getCourseData,
  getCourseDataResult,
  getCourseDataUrl,
  highlightedCourseList,
  verifyIsUserAuthenticated,
} from "../../utils/AppConstant";
import React, { useEffect, useState } from "react";

import { Button } from "reactstrap";
import Link from "next/link";
import PropTypes from "prop-types";
import { SectionProps } from "../../utils/SectionProps";
import Select from "react-select";
import { callBookForm } from "../../services/authroutes";
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

const BookForm = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  setIsLoading,
  cityData,
  ...props
}) => {
  const [subject, setSubject] = useState({});
  const [specialrequest, setspecialrequest] = useState("");
  const [preselectedCourse, setpreselectedCourse] = useState({});
  const [course, setCourse] = useState({});
  const history = useHistory();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (props.course) {
      let selectedcourse = mapper["courses"].find(
        (item) => item.value == getCourseData[props.course]
      );
      if (selectedcourse) {
        handleChange(selectedcourse, "course");
      }
    }
  }, [props.course]);

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

  let mapper = {
    courses: COURSES_GRADES(),
    subjects: SUBJECTS(course.value),
  };

  const renderOptions = (type) => {
    return mapper[type];
  };

  const handleChange = (e, type) => {
    if (type == "course") {
      setCourse(e);
      setSubject({});
    } else if (type == "subject") {
      setSubject(e);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let body = {
      username: localStorage.getItem("username"),
      email: localStorage.getItem("username"),
      name: localStorage.getItem("name"),
      mobile: localStorage.getItem("mobile"),
      subject: subject.value,
      course: course.value,
      specialRequirement: specialrequest,
      roles: ["user"],
    };
    if (!subject?.value?.trim() || !course?.value?.trim()) {
      setError("Please fill all the relevant info");
      return;
    }
    if (verifyIsUserAuthenticated()) {
      try {
        setIsLoading(true);
        const res = await callBookForm(body);
        setIsLoading(false);
        if (res.status == 200 || res.data.status == 200) {
          history.push("/profile");
        }
      } catch (err) {
        if (checkauthfailed(err, setIsLoading, history)) {
          return;
        }
        setIsLoading(false);
        alert("Server error. Try again");
        console.log(err.message);
      }
    } else {
      history.push("/sign-in");
    }
  };

  const getLink = () => {
    let obj = highlightedCourseList.find(
      (item) => item.identifier == getCourseDataUrl[course.label]
    );
    return obj?.link;
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="bookFormWrapper">
            <div>
              <div className="card p-5">
                <h1 className="heading">
                  <i className="fa fa-exchange"></i> Book a{" "}
                  <span>One-on-One</span> Class with{" "}
                  <span>Edusession Live</span>
                  {cityData?.cityData
                    ? ` in ${cityData?.cityData?.display}`
                    : ""}
                </h1>
                <p className="book-msg">
                  <i className="fa fa-laptop my-float"> </i> At your time and
                  comfort with your preferred faculties for{" "}
                  <span>CBSE, ICSE, IB, State Board</span> and{" "}
                  <span>Competitive Examination</span> preparation.
                </p>
                <div className="moreCourseInfo">
                  {getLink() && (
                    <Link href={getLink()}>
                      <a>
                        <i className="fa fa-external-link"></i> Click Here for{" "}
                        <span style={{ fontWeight: "600" }}>
                          {course.label}
                        </span>{" "}
                        Course Info
                      </a>
                    </Link>
                  )}
                </div>

                <div className="m-2">
                  <label htmlFor={"courses"}>Select Course/Grade</label>
                  <Select
                    options={renderOptions("courses")}
                    onChange={(e) => {
                      handleChange(e, "course");
                    }}
                    value={course.value ? course : preselectedCourse}
                    id={"courses"}
                    key={`select__1`}
                    getOptionLabel={(e) => (
                      <div className="optionlabelArea">
                        <span>{e.label}</span>
                      </div>
                    )}
                  />
                </div>
                <div className="m-2">
                  <label htmlFor={"subjects"}>Select Subject</label>
                  <Select
                    options={renderOptions("subjects")}
                    onChange={(e) => {
                      handleChange(e, "subject");
                    }}
                    value={subject}
                    id={"subjects"}
                    key={`select__2`}
                    getOptionLabel={(e) => (
                      <div className="optionlabelArea">
                        <span style={e.index == 0 ? { color: "#009E76" } : {}}>
                          {e.label}
                        </span>
                      </div>
                    )}
                  />
                </div>
                <div className="m-2">
                  <label htmlFor={"request"}>Any Special Request</label>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    defaultValue={""}
                    value={specialrequest}
                    onChange={(e) => {
                      setspecialrequest(e.target.value);
                    }}
                  />
                </div>
                <div className="m-2">
                  {error && (
                    <p
                      style={{
                        color: "red",
                        marginTop: "5px",
                      }}
                    >
                      {error}
                    </p>
                  )}
                  <Button
                    color="primary"
                    onClick={(e) => {
                      onSubmit(e);
                    }}
                  >
                    Book Class
                  </Button>
                </div>
                <div className="m-2">
                  <p className="callMessage">
                    {" "}
                    <i className="fa fa-phone my-float"></i> Need help in
                    anything? Call us at <span>+91 82378 15800</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BookForm.propTypes = propTypes;
BookForm.defaultProps = defaultProps;

export default BookForm;
