// import './table.css';

import React, { useEffect, useState } from "react";

import SectionHeader from "./partials/SectionHeader";
import { callAllBookedClasses } from "../../services/authroutes";
import classNames from "classnames";
import { useRouter as useHistory } from "next/router";

const BookedClassesSection = ({
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
  const [data, setdata] = useState([]);
  const history = useHistory();
  const setIsLoading = props.setIsLoading;
  useEffect(() => {
    let body = {
      username: localStorage.getItem("username"),
    };
    setIsLoading(true);
    callAllBookedClasses(body)
      .then((res) => {
        setdata(res.data.forms || []);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        history.push("/");
      });
  }, []);
  const outerClasses = classNames(
    "adminpanel section",
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

  const sectionHeader = {
    title: "Admin Panel",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            from="adminPanel"
          />
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Course</th>
                  <th>Subject</th>
                  <th>Special Requirement</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.email}</td>
                    <td>{item.name}</td>
                    <td>{item.mobile}</td>
                    <td>{item.course}</td>
                    <td>{item.subject}</td>
                    <td>{item.specialRequirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookedClassesSection;
