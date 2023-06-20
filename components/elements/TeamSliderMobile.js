import React, { useState } from "react";

import SectionHeader from "../sections/partials/SectionHeader";
import { teamMembers } from "../../utils/AppConstant";

const TeamPageM = () => {
  const sectionHeader = {
    title: (
      <>
        <i className="fa fa-users"></i> Meet our{" "}
        <span style={{ color: "#5658dd" }}>Dream</span> Online Tutors
      </>
    ),
    paragraph: (
      `<span style="color: dimgrey;">Access Subject-specific tutors who specialize in your areas of
      interest. Enhance your understanding and grasp complex concepts with
      the help of these expert tutors. Whether you need assistance in
      <span style="color: #5658dd;">Math, Science, IELTS, NDA</span>, or any other subject, these tutors are
      here to guide you towards success. Boost your grades and knowledge
      with the support of subject-specific tutors!</span>`
    ),
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="teampageslidermobile">
    <div
      className="container"
      style={{ maxWidth: "100%", overflow: "hidden" }}
    >
      <div className="slider" style={{ position: "relative" }}>
        <SectionHeader
          data={sectionHeader}
          className="center-content"
          from="meetourteachers"
          tag="h3"
        />
        <div
          className="slider-content"
          style={{
            display: "flex",
            transition: "transform 0.3s",
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {teamMembers.map((member, index) => (
            <div
              className="slider-item"
              style={{
                flex: "0 0 100%",
                transform: "translateX(0)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={index}
            >
              <div className="card">
                <img
                  className="card-img"
                  src={member.imageSrc}
                  alt="Team Member"
                />
                <p className="text-blk name">{member.name}</p>
                <p className="subjects">{member.subjects.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="slider-controls"
          style={{
            position: "absolute",
            bottom: "30%",
            transform: "translateY(-50%)",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <button
            className="previous-btn"
            style={{
              border: "none",
              background: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#5658dd",
              marginRight: "10px",
            }}
            onClick={handlePrevious}
          >
            <i className="fa fa-chevron-left"></i>
          </button>
          <button
            className="next-btn"
            style={{
              border: "none",
              background: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#5658dd",
              marginLeft: "10px",
            }}
            onClick={handleNext}
          >
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TeamPageM;
