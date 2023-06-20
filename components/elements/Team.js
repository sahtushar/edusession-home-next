import React from "react";
import SectionHeader from "../sections/partials/SectionHeader";
import { teamMembers } from "../../utils/AppConstant"

const TeamPage = () => {
  const sectionHeader = {
    title: (
      <>
        <i className="fa fa-users"></i> Meet our{" "}
        <span style={{ color: "#5658dd" }}>Dream</span> Online Tutors
      </>
    ),
    paragraph: `<span style="color: dimgrey;">Access Subject-specific tutors who specialize in your areas of
    interest. Enhance your understanding and grasp complex concepts with
    the help of these expert tutors. Whether you need assistance in
    <span style="color: #5658dd;">Math, Science, IELTS, NDA</span>, or any other subject, these tutors are
    here to guide you towards success. Boost your grades and knowledge
    with the support of subject-specific tutors!</span>`,
  };

  return (
    <div className="teampageslider">
      <div className="container responsive-container-block outer-container">
        <div className="responsive-container-block inner-container">
          <div className="responsive-cell-block">
            {/* <h3 className="text-blk heading-text">Meet our Dream Teachers</h3> */}
            {/* <p className="text-blk sub-heading-text">
            Access Subject-specific tutors who specialize in your areas of
            interest. Enhance your understanding and grasp complex concepts with
            the help of these expert tutors. Whether you need assistance in
            Math, Science, IELTS, NDA, or any other subject, these tutors are
            here to guide you towards success. Boost your grades and knowledge
            with the support of subject-specific tutors!
          </p> */}
            <SectionHeader
              data={sectionHeader}
              className="center-content"
              from="meetourteachers"
              tag="h3"
            />
          </div>
          <div className="responsive-cell-block membersWrapper">
            {teamMembers.map((member, index) => (
              <div className="responsive-cell-block card-container" key={index}>
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
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
