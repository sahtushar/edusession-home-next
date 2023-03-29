import PropTypes from "prop-types";
import React from "react";
import { SectionProps } from "../../utils/SectionProps";
import classNames from "classnames";
import { useState } from "react";

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

  const [feedback, setFeedback] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    topicsOfInterest: "",
    preferredCommunication: "",
    geographicLocation: "",
    likelihoodOfEnrolling: "",
    howTheyHeard: "",
    age: "",
    gender: "",
    educationalBackground: "",
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
    sessionRating: {
      rating: "",
      comment: "",
    },
  });

  const handleFeedbackChange = (event) => {
    const { name, value } = event.target;
    const [category, subCategory] = name.split(".");
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [category]: {
        ...prevFeedback[category],
        [subCategory]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(feedback);
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="feedbackWrapper">
            <h1>Teacher Feedback Form</h1>
            <form onSubmit={handleSubmit} className="container my-5">
              <div className="mb-3">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  value={feedback.fullName}
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
                  name="email"
                  value={feedback.email}
                  onChange={handleFeedbackChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={feedback.phoneNumber}
                  onChange={handleFeedbackChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="topicsOfInterest">
                  Topics/Subjects of Interest
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="topicsOfInterest"
                  name="topicsOfInterest"
                  value={feedback.topicsOfInterest}
                  onChange={handleFeedbackChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="preferredCommunication">
                  Preferred Mode of Communication
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="preferredCommunication"
                  name="preferredCommunication"
                  value={feedback.preferredCommunication}
                  onChange={handleFeedbackChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="geographicLocation">Geographic Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="geographicLocation"
                  name="geographicLocation"
                  value={feedback.geographicLocation}
                  onChange={handleFeedbackChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="likelihoodOfEnrolling">
                  Likelihood of Enrolling in a Course/Program based on the Demo
                  Class
                </label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  className="form-control"
                  id="likelihoodOfEnrolling"
                  name="likelihoodOfEnrolling"
                  value={feedback.likelihoodOfEnrolling}
                  onChange={handleFeedbackChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="howTheyHeard">
                  How They Heard About the Demo Class
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="howTheyHeard"
                  name="howTheyHeard"
                  value={feedback.howTheyHeard}
                  onChange={handleFeedbackChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  value={feedback.age}
                  onChange={handleFeedbackChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="gender">Gender</label>
                <select
                  className="form-control"
                  id="gender"
                  name="gender"
                  value={feedback.gender}
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
                  name="educationalBackground"
                  value={feedback.educationalBackground}
                  onChange={handleFeedbackChange}
                  required
                >
                  <option value=""></option>
                  <option value="high school">High School</option>
                  <option value="bachelor's degree">Bachelor's Degree</option>
                  <option value="master's degree">Master's Degree</option>
                  <option value="doctorate">Doctorate</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="conceptsCleared">
                  Were the Concepts Cleared in the Demo?
                </label>
                <div className="d-flex align-items-center">
                  <input
                    type="number"
                    min="1"
                    max="5"
                    className="form-control me-2"
                    id="conceptsClearedRating"
                    name="conceptsCleared.rating"
                    value={feedback.conceptsCleared.rating}
                    onChange={handleFeedbackChange}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="conceptsClearedComment"
                    name="conceptsCleared.comment"
                    value={feedback.conceptsCleared.comment}
                    onChange={handleFeedbackChange}
                    required
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
                    className="form-control me-2"
                    id="sessionOnTimeRating"
                    name="sessionOnTime.rating"
                    value={feedback.sessionOnTime.rating}
                    onChange={handleFeedbackChange}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="sessionOnTimeComment"
                    name="sessionOnTime.comment"
                    value={feedback.sessionOnTime.comment}
                    onChange={handleFeedbackChange}
                    required
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
                    className="form-control me-2"
                    id="facultyClearDoubtsRating"
                    name="facultyClearDoubts.rating"
                    value={feedback.facultyClearDoubts.rating}
                    onChange={handleFeedbackChange}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="facultyClearDoubtsComment"
                    name="facultyClearDoubts.comment"
                    value={feedback.facultyClearDoubts.comment}
                    onChange={handleFeedbackChange}
                    required
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
                    className="form-control me-2"
                    id="connectivityDifficultyRating"
                    name="connectivityDifficulty.rating"
                    value={feedback.connectivityDifficulty.rating}
                    onChange={handleFeedbackChange}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="connectivityDifficultyComment"
                    name="connectivityDifficulty.comment"
                    value={feedback.connectivityDifficulty.comment}
                    onChange={handleFeedbackChange}
                    required
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
                    className="form-control me-2"
                    id="sessionInteractiveRating"
                    name="sessionInteractive.rating"
                    value={feedback.sessionInteractive.rating}
                    onChange={handleFeedbackChange}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="sessionInteractiveComment"
                    name="sessionInteractive.comment"
                    value={feedback.sessionInteractive.comment}
                    onChange={handleFeedbackChange}
                    required
                    placeholder="Add your comments here"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="suggestions">
                  Do You Have Any Suggestions for the Betterment of the
                  Institute?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="suggestions"
                  name="suggestions"
                  value={feedback.suggestions}
                  onChange={handleFeedbackChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="likelihoodEnrolling">
                  Likelihood of Enrolling in a Course or Program Based on the
                  Demo Class
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="likelihoodEnrolling"
                    id="likely"
                    value="likely"
                    onChange={handleFeedbackChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="likely">
                    Likely
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="likelihoodEnrolling"
                    id="neutral"
                    value="neutral"
                    onChange={handleFeedbackChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="neutral">
                    Neutral
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="likelihoodEnrolling"
                    id="unlikely"
                    value="unlikely"
                    onChange={handleFeedbackChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="unlikely">
                    Unlikely
                  </label>
                </div>
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
