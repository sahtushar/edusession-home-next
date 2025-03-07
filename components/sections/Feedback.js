import { Button, Table, Toast, ToastBody, ToastHeader } from "reactstrap";
import {
  CallActivity,
  CoursesDropdown,
  RelationShipStudent,
  checkauthfailed,
  educationalBackground,
  jokes,
  removeCountryCodeAndSpaces,
  verifyIsUserAuthenticated,
} from "../../utils/AppConstant";
import React, { useEffect, useRef } from "react";
import {
  callFeedbackSubmit,
  emmailNotification,
  fetchFeedbackFetch,
} from "../../services/authroutes";

import { BookSlot } from "../elements/BookSlot";
import CitiesDropdown from "../elements/CitiesDropdown";
import DemoEmail from "../elements/DemoEmail";
import { DownloadTableExcel } from "react-export-table-to-excel";
import EdusessionWelcome from "../elements/WelcomeEmail";
import LeadsTable from "../elements/LeadsTable";
import PropTypes from "prop-types";
import { SectionProps } from "../../utils/SectionProps";
import classNames from "classnames";
import moment from "moment";
import { useRouter as useHistory } from "next/router";
import { useState } from "react";
import { useStyleRegistry } from "styled-jsx";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
};

const TeacherFeedback = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  setIsLoading,
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
  const history = useHistory();
  const [date, setDate] = useState();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [demotime, setDemoTime] = useState("");
  const [feedback, setFeedback] = useState({
    //userdata

    userdata: {
      fullName: "",
      email: "",
      phoneNumber: "",
      relationship: "",
      selectedCourse: "",
      topicsOfInterest: "",
      preferredCommunication: "",
      geographicLocation: "",
      howTheyHeard: "",
      age: "",
      gender: "",
      educationalBackground: "",
      remarks: "",
      remarks2: "",
    },

    //postdemo data
    postdemo: {
      likelihoodOfEnrolling: "",
      conceptsCleared: {
        rating: "",
        comment: "",
      },
      sessionOnTime: {
        rating: "",
        comment: "",
      },
      facultyClearDoubts: {
        rating: "",
        comment: "",
      },
      connectivityDifficulty: {
        rating: "",
        comment: "",
      },
      sessionInteractive: {
        rating: "",
        comment: "",
      },
      suggestions: {
        rating: "",
        comment: "",
      },
      careercoaching: "",
    },
  });
  const [mobile, setmobile] = useState("");
  const [nametext, setnametext] = useState("");
  const [allLeads, setAllLeads] = useState([]);
  const [allLeadsOriginal, setAllLeadsOriginal] = useState([]);
  const tableRef = useRef(null);
  const [currentFact, setCurrentfact] = useState("");

  useEffect(() => {
    setCurrentfact(jokes[Math.floor(Math.random() * jokes.length)]);
  }, []);

  useEffect(() => {
    if (date) {
      setFeedback((prevFeedback) => ({
        ...prevFeedback,
        userdata: {
          ...prevFeedback.userdata,
          ...{ date: date, formattedDate: date?.format("dddd, MMMM Do YYYY") },
        },
      }));
    }
  }, [date]);

  useEffect(() => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      userdata: {
        ...prevFeedback.userdata,
        ...{ time: selectedTimeSlot },
      },
    }));
  }, [selectedTimeSlot]);

  useEffect(() => {
    let existingLists = [...allLeads];
    let filtered = [];
    if (nametext.length >= 2) {
      existingLists.map((item) => {
        if (
          item.userdata.fullName
            .toLocaleLowerCase()
            .match(nametext.toLocaleLowerCase()) ||
          item.userdata.phoneNumber
            .toLocaleLowerCase()
            .match(nametext.toLocaleLowerCase())
        ) {
          filtered.push(item);
        }
      });
      setAllLeads(filtered);
    } else {
      setAllLeads(allLeadsOriginal);
    }
  }, [nametext]);

  const handleFeedbackChange = (event) => {
    const { name, value } = event.target;
    const [category, subCategory] = name.split(".");
    if (subCategory == "userdata") {
      if (category == "phoneNumber") {
        setFeedback((prevFeedback) => ({
          ...prevFeedback,
          userdata: {
            ...prevFeedback.userdata,
            ...{ [category]: removeCountryCodeAndSpaces(value) },
          },
        }));
      } else
        setFeedback((prevFeedback) => ({
          ...prevFeedback,
          userdata: { ...prevFeedback.userdata, ...{ [category]: value } },
        }));
    } else {
      // setFeedback((prevFeedback) => ({
      //   ...prevFeedback,
      //   postdemo: {
      //     ...prevFeedback.postdemo,
      //     ...{
      //       [category]: {
      //         ...prevFeedback[category],
      //         [subCategory]: value,
      //       },
      //     },
      //   },
      // }));
      let feedbackValue = { ...feedback };
      if (subCategory) {
        feedbackValue.postdemo[category] = {
          ...feedbackValue.postdemo[category],
          [subCategory]: value,
        };
      } else {
        feedbackValue.postdemo[category] = value;
      }
      setFeedback(feedbackValue);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let body = {
      mobile: feedback.userdata.phoneNumber,
      userdata: {
        fullName: feedback.userdata.fullName,
        email: feedback.userdata.email,
        phoneNumber: feedback.userdata.phoneNumber,
        relationship: feedback.userdata.relationship,
        topicsOfInterest: feedback.userdata.topicsOfInterest,
        selectedCourse: feedback.userdata.selectedCourse,
        preferredCommunication: feedback.userdata.preferredCommunication,
        geographicLocation: feedback.userdata.geographicLocation,
        howTheyHeard: feedback.userdata.howTheyHeard,
        age: feedback.userdata.age,
        gender: feedback.userdata.gender,
        educationalBackground: feedback.userdata.educationalBackground,
        remarks: feedback.userdata.remarks,
        remarks2: feedback.userdata.remarks2,
        date: feedback.userdata.date,
        formattedDate: feedback.userdata.formattedDate,
        time: feedback.userdata.time,
      },
      type: "userdata",
      roles: ["user"],
    };

    if (verifyIsUserAuthenticated()) {
      try {
        setIsLoading(true);
        const res = await callFeedbackSubmit(body);
        console.log("res", res);
        if (res.data.message.match(/success/i)) {
          alert("Lead Updated successfully");
        }
        if (!res?.data?.documentExisted && res?.data?.doc?.userdata?.email) {
          console.log("Email block");
          let user = {
            fullName: res?.data?.doc?.userdata?.fullName || "",
            email: res?.data?.doc?.userdata?.email,
            mobile: res?.data?.doc?.mobile,
          };
          let body = EdusessionWelcome(user);
          //Welcome Email
          try {
            let email = await emmailNotification({
              to: user.email,
              subject: "New World Of Online Learning - Edusession Live!",
              body: body,
            });
            console.log("Welcome email sent!");
          } catch (err) {
            console.log(err);
          }
        }

        if (selectedTimeSlot && res?.data?.doc?.userdata?.email) {
          let user = {
            fullName: res?.data?.doc?.userdata?.fullName || "",
            email: res?.data?.doc?.userdata?.email,
            mobile: res?.data?.doc?.mobile,
          };
          let demodetails = {
            name: res?.data?.doc?.userdata?.fullName || "",
            courseName: res?.data?.doc?.userdata?.selectedCourse || "",
            date: res?.data?.doc?.userdata?.formattedDate,
            time: res?.data?.doc?.userdata?.time,
          };
          let body = DemoEmail(demodetails);
          //Demo Email
          try {
            let email = await emmailNotification({
              to: user.email,
              subject: "Free Demo Booked - Edusession Live!",
              body: body,
            });
            console.log("Demo email sent!");
            setTimeout(() => {
              window.location.reload(false);
            }, 2000);
          } catch (err) {
            console.log(err);
          }
        }

        setIsLoading(false);
        if (res.status == 200 || res.data.status == 200) {
          history.push("/feedback");
        }

        //fetchAllFeedback();
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

  const handleSubmitFeedback = async (event) => {
    event.preventDefault();
    let body = {
      mobile: feedback.userdata.phoneNumber || mobile,
      postdemo: {
        likelihoodOfEnrolling: feedback.postdemo.likelihoodOfEnrolling,
        conceptsCleared: {
          rating: feedback.postdemo.conceptsCleared.rating,
          comment: feedback.postdemo.conceptsCleared.comment,
        },
        sessionOnTime: {
          rating: feedback.postdemo.sessionOnTime.rating,
          comment: feedback.postdemo.sessionOnTime.comment,
        },
        facultyClearDoubts: {
          rating: feedback.postdemo.facultyClearDoubts.rating,
          comment: feedback.postdemo.facultyClearDoubts.comment,
        },
        connectivityDifficulty: {
          rating: feedback.postdemo.connectivityDifficulty.rating,
          comment: feedback.postdemo.connectivityDifficulty.comment,
        },
        sessionInteractive: {
          rating: feedback.postdemo.sessionInteractive.rating,
          comment: feedback.postdemo.sessionInteractive.comment,
        },
        suggestions: {
          rating: feedback.postdemo.suggestions.rating,
          comment: feedback.postdemo.suggestions.comment,
        },
        careercoaching: feedback.postdemo.careercoaching,
      },
      type: "postdemo",
      roles: ["user"],
    };

    if (verifyIsUserAuthenticated()) {
      try {
        setIsLoading(true);
        const res = await callFeedbackSubmit(body);
        setIsLoading(false);
        if (res.status == 200 || res.data.status == 200) {
          history.push("/feedback");
        }
        //fetchAllFeedback();
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

  async function fetchFeedback(id) {
    let body = {
      _id: id.toString(),
      username: localStorage?.getItem("username"),
    };
    // if (
    //   (phone?.trim() && phone?.trim()?.length >= 10) ||
    //   (mobile?.trim() && mobile?.trim()?.length >= 10)
    // )
    {
      try {
        setIsLoading(true);
        let res = await fetchFeedbackFetch(body);
        setIsLoading(false);
        let feedbackOld = { ...feedback };
        feedbackOld["userdata"] = res.data.userdata;
        feedbackOld["postdemo"] = res.data.postdemo;
        setFeedback(feedbackOld);
        //setDemoTime(res?.data?.userdata?.time);
        document
          .querySelector(
            "#__next > main > section > div > div > div > form.container.my-2.basicInfo"
          )
          ?.scrollIntoView();
      } catch (err) {
        setIsLoading(false);
        //if (checkauthfailed(err, setIsLoading, history)) {
        //return;
        // }
        alert("Lead/User Not Found");
        return;
      }
    }
  }
  async function fetchAllFeedback() {
    let body = {
      showAll: true,
      username: localStorage?.getItem("username"),
    };
    try {
      setIsLoading(true);
      let res = await fetchFeedbackFetch(body);
      setIsLoading(false);
      setAllLeads(res.data.forms);
      setAllLeadsOriginal(res.data.forms);
    } catch (err) {
      setIsLoading(false);
      if (checkauthfailed(err, setIsLoading, history)) {
        return;
      }
      alert("Lead/User Not Found");
      return;
    }
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="feedbackWrapper">
            <p>"{currentFact}"</p>
            <h1>Lead generation</h1>
            <div className="mb-3 border-bottom">
              <p>Find A Lead</p>
              {/* <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                className="form-control mb-3"
                id="mobile"
                name="mobile.userdata"
                value={mobile}
                onChange={(e) => {
                  setmobile(e.target.value);
                }}
                required
              /> */}
              <div className="ctasforlead">
                {/* <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => {
                    fetchFeedback();
                  }}
                >
                  Submit
                </button> */}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    fetchAllFeedback();
                  }}
                >
                  Fetch All Feedback
                </button>
              </div>
              <div className="ctasforlead">
                {/* <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => {
                    fetchFeedback();
                  }}
                >
                  Submit
                </button> */}
                {/* <button
                  className="btn btn-primary"
                  onClick={() => {
                    fetchAllFeedback();
                  }}
                >
                  Fetch All Feedback
                </button> */}
              </div>
              {true ? (
                <div className="feedbackTableSection">
                  <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                  >
                    <Button> Export excel </Button>
                  </DownloadTableExcel>
                  <div className="mt-3">
                    <label htmlFor="nametext">Search by Name or Mobile</label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="nametext"
                      name="nametext.userdata"
                      value={nametext}
                      onChange={(e) => {
                        setnametext(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}
              {allLeads.length ? (
                <LeadsTable
                  allLeads={allLeads}
                  tableRef={tableRef}
                  feedback={feedback}
                  fetchFeedback={fetchFeedback}
                />
              ) : (
                <></>
              )}
            </div>

            <form onSubmit={handleSubmit} className="container my-2 basicInfo">
              <p>Or Create a new Lead...</p>
              <h2>Basic Info</h2>
              <div className="mb-3">
                <label htmlFor="fullName">Full Name (*)</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName.userdata"
                  value={feedback.userdata.fullName}
                  onChange={handleFeedbackChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email.userdata"
                  value={feedback.userdata.email}
                  onChange={handleFeedbackChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber">Phone Number(*)</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber.userdata"
                  value={removeCountryCodeAndSpaces(
                    feedback.userdata.phoneNumber
                  )}
                  onChange={handleFeedbackChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="relationship">Relationship with student</label>
                {/* <input
                  type="text"
                  className="form-control"
                  id="remarks"
                  name="remarks.userdata"
                  value={feedback.userdata.remarks}
                  onChange={handleFeedbackChange}
                /> */}
                <select
                  type="text"
                  className="form-control"
                  id="relationship"
                  name="relationship.userdata"
                  value={feedback.userdata.relationship}
                  onChange={handleFeedbackChange}
                >
                  {RelationShipStudent()}
                </select>
                <label>
                  Value:
                  <span style={{ color: "black" }}>
                    {feedback?.userdata?.relationship}
                  </span>
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="selectedCourse">Selected Course</label>
                {/* <input
                  type="text"
                  className="form-control"
                  id="preferredCommunication"
                  name="preferredCommunication.userdata"
                  value={feedback.userdata.preferredCommunication}
                  onChange={handleFeedbackChange}
                  required
                /> */}
                <select
                  className="form-control"
                  id="selectedCourse"
                  name="selectedCourse.userdata"
                  value={feedback.userdata.selectedCourse}
                  onChange={handleFeedbackChange}
                >
                  {CoursesDropdown()}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="topicsOfInterest">
                  Topics/Subjects of Interest
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="topicsOfInterest"
                  name="topicsOfInterest.userdata"
                  value={feedback.userdata.topicsOfInterest}
                  onChange={handleFeedbackChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="preferredCommunication">
                  Preferred Mode of Communication
                </label>
                {/* <input
                  type="text"
                  className="form-control"
                  id="preferredCommunication"
                  name="preferredCommunication.userdata"
                  value={feedback.userdata.preferredCommunication}
                  onChange={handleFeedbackChange}
                  required
                /> */}
                <select
                  className="form-control"
                  id="preferredCommunication"
                  name="preferredCommunication.userdata"
                  value={feedback.userdata.preferredCommunication}
                  onChange={handleFeedbackChange}
                >
                  <option value=""></option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Marathi">Marathi</option>
                  <option value="Konkan">Konkan</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="geographicLocation">Geographic Location</label>
                {/* <input
                  type="text"
                  className="form-control"
                  id="geographicLocation"
                  name="geographicLocation.userdata"
                  value={feedback.userdata.geographicLocation}
                  onChange={handleFeedbackChange}
                /> */}
                <CitiesDropdown
                  id="geographicLocation"
                  name="geographicLocation.userdata"
                  handleFeedbackChange={handleFeedbackChange}
                />
                <label>
                  Value:
                  <span style={{ color: "black" }}>
                    {feedback?.userdata?.geographicLocation}
                  </span>
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="howTheyHeard">
                  How They Heard About the Demo Class(*)
                </label>
                {/* <input
                  type="text"
                  className="form-control"
                  id="howTheyHeard"
                  name="howTheyHeard.userdata"
                  value={feedback.userdata.howTheyHeard}
                  onChange={handleFeedbackChange}
                  required
                /> */}
                <select
                  className="form-control"
                  id="howTheyHeard"
                  name="howTheyHeard.userdata"
                  value={feedback.userdata.howTheyHeard}
                  onChange={handleFeedbackChange}
                  required
                >
                  <option value=""></option>
                  <option value="Just Dial">Just Dial</option>
                  <option value="Sulekha">Sulekha</option>
                  <option value="Web Search">Web Search</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Facebook Ad">Facebook Ad</option>
                  <option value="Google Ad">Google Ad</option>
                  <option value="Word of Mouth">Word of Mouth</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age.userdata"
                  value={feedback.userdata.age}
                  onChange={handleFeedbackChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="gender">Gender (*)</label>
                <select
                  className="form-control"
                  id="gender"
                  name="gender.userdata"
                  value={feedback.userdata.gender}
                  onChange={handleFeedbackChange}
                  required
                >
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-Binary</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="educationalBackground">
                  Educational Background
                </label>
                <select
                  className="form-control"
                  id="educationalBackground"
                  name="educationalBackground.userdata"
                  value={feedback.userdata.educationalBackground}
                  onChange={handleFeedbackChange}
                >
                  {educationalBackground()}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="remarks">Remarks (Call Activity) (*)</label>
                {/* <input
                  type="text"
                  className="form-control"
                  id="remarks"
                  name="remarks.userdata"
                  value={feedback.userdata.remarks}
                  onChange={handleFeedbackChange}
                /> */}
                <select
                  type="text"
                  className="form-control"
                  id="remarks"
                  name="remarks.userdata"
                  value={feedback.userdata.remarks}
                  onChange={handleFeedbackChange}
                  required
                >
                  {CallActivity()}
                </select>
                <label>
                  Value:
                  <span style={{ color: "black" }}>
                    {feedback?.userdata?.remarks}
                  </span>
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="remarks2">Remarks-2</label>
                <input
                  type="text"
                  className="form-control"
                  id="remarks2"
                  name="remarks2.userdata"
                  value={feedback.userdata.remarks2}
                  onChange={handleFeedbackChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor={"Preferrd Call Time"}>
                  Preferred Demo Slot
                </label>
                <BookSlot
                  date={date}
                  setDate={setDate}
                  selectedTimeSlot={selectedTimeSlot}
                  setSelectedTimeSlot={setSelectedTimeSlot}
                  disableSlot={false}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <form
              className="container my-5 postDemo"
              onSubmit={handleSubmitFeedback}
            >
              <h2>Post Demo Feedback</h2>
              <div className="mb-3">
                <label htmlFor="conceptsCleared">
                  Were the Concepts Cleared in the Demo?
                </label>
                <div className="d-flex align-items-center">
                  <input
                    type="number"
                    min="1"
                    max="5"
                    className="form-control me-2 rating"
                    id="conceptsClearedRating"
                    name="conceptsCleared.rating"
                    value={feedback?.postdemo?.conceptsCleared?.rating}
                    onChange={handleFeedbackChange}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="conceptsClearedComment"
                    name="conceptsCleared.comment"
                    value={feedback?.postdemo?.conceptsCleared?.comment}
                    onChange={handleFeedbackChange}
                    placeholder="Add your comments here"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="sessionOnTime">Was the Session On Time?</label>
                <div className="d-flex align-items-center">
                  <input
                    type="number"
                    min="1"
                    max="5"
                    className="form-control me-2 rating"
                    id="sessionOnTimeRating"
                    name="sessionOnTime.rating"
                    value={feedback?.postdemo?.sessionOnTime?.rating}
                    onChange={handleFeedbackChange}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="sessionOnTimeComment"
                    name="sessionOnTime.comment"
                    value={feedback?.postdemo?.sessionOnTime?.comment}
                    onChange={handleFeedbackChange}
                    placeholder="Add your comments here"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="facultyClearDoubts">
                  Did the Faculty Clear Your Doubts?
                </label>
                <div className="d-flex align-items-center">
                  <input
                    type="number"
                    min="1"
                    max="5"
                    className="form-control me-2 rating"
                    id="facultyClearDoubtsRating"
                    name="facultyClearDoubts.rating"
                    value={feedback?.postdemo?.facultyClearDoubts?.rating}
                    onChange={handleFeedbackChange}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="facultyClearDoubtsComment"
                    name="facultyClearDoubts.comment"
                    value={feedback?.postdemo?.facultyClearDoubts?.comment}
                    onChange={handleFeedbackChange}
                    placeholder="Add your comments here"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="connectivityDifficulty">
                  Did You Face Any Difficulty in Connectivity?
                </label>
                <div className="d-flex align-items-center">
                  <input
                    type="number"
                    min="1"
                    max="5"
                    className="form-control me-2 rating"
                    id="connectivityDifficultyRating"
                    name="connectivityDifficulty.rating"
                    value={feedback?.postdemo?.connectivityDifficulty?.rating}
                    onChange={handleFeedbackChange}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="connectivityDifficultyComment"
                    name="connectivityDifficulty.comment"
                    value={feedback?.postdemo?.connectivityDifficulty?.comment}
                    onChange={handleFeedbackChange}
                    placeholder="Add your comments here"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="sessionInteractive">
                  Was the Session Interactive?
                </label>
                <div className="d-flex align-items-center">
                  <input
                    type="number"
                    min="1"
                    max="5"
                    className="form-control me-2 rating"
                    id="sessionInteractiveRating"
                    name="sessionInteractive.rating"
                    value={feedback?.postdemo?.sessionInteractive?.rating}
                    onChange={handleFeedbackChange}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="sessionInteractiveComment"
                    name="sessionInteractive.comment"
                    value={feedback?.postdemo?.sessionInteractive?.comment}
                    onChange={handleFeedbackChange}
                    placeholder="Add your comments here"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="likelihoodOfEnrolling">
                  Likelihood of Enrolling in a Course or Program Based on the
                  Demo Class
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="likelihoodOfEnrolling"
                    id="likely"
                    value="Likely"
                    onChange={handleFeedbackChange}
                    required
                    checked={
                      feedback?.postdemo?.likelihoodOfEnrolling == "Likely"
                    }
                  />
                  <label className="form-check-label" htmlFor="likely">
                    Likely
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="likelihoodOfEnrolling"
                    id="neutral"
                    value="Neutral"
                    onChange={handleFeedbackChange}
                    required
                    checked={
                      feedback?.postdemo?.likelihoodOfEnrolling == "Neutral"
                    }
                  />
                  <label className="form-check-label" htmlFor="neutral">
                    Neutral
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="likelihoodOfEnrolling"
                    id="unlikely"
                    value="Unlikely"
                    onChange={handleFeedbackChange}
                    required
                    checked={
                      feedback?.postdemo?.likelihoodOfEnrolling == "Unlikely"
                    }
                  />
                  <label className="form-check-label" htmlFor="unlikely">
                    Unlikely
                  </label>
                </div>
                <label>
                  Value:
                  <span style={{ color: "black" }}>
                    {feedback?.postdemo?.likelihoodOfEnrolling}
                  </span>
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="suggestions">
                  How would you rate your overall Edu-session experience?
                </label>
                {/* <input
                    type="text"
                    className="form-control"
                    id="suggestions"
                    name="suggestions"
                    value={feedback.postdemo.suggestions}
                    onChange={handleFeedbackChange}
                    required
                  /> */}
                <div className="d-flex align-items-center">
                  <input
                    type="number"
                    min="1"
                    max="5"
                    className="form-control me-2 rating"
                    id="suggestions"
                    name="suggestions.rating"
                    value={feedback?.postdemo?.suggestions?.rating}
                    onChange={handleFeedbackChange}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="suggestionsComment"
                    name="suggestions.comment"
                    value={feedback?.postdemo?.suggestions?.comment}
                    onChange={handleFeedbackChange}
                    placeholder="Any Suggestion for our Betterment"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="careercoaching">
                  Is any requirement for career coaching?
                </label>
                <select
                  className="form-control"
                  id="careercoaching"
                  name="careercoaching"
                  value={feedback?.postdemo?.careercoaching}
                  onChange={handleFeedbackChange}
                  required
                >
                  <option value=""></option>
                  <option value="Yes">Yes</option>
                  <option value="Yes">No</option>
                  <option value="Neutral">Can't Say for now</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

TeacherFeedback.propTypes = propTypes;
TeacherFeedback.defaultProps = defaultProps;

export default TeacherFeedback;
