import { ListGroup, ListGroupItem } from "reactstrap";

import Link from "next/link";
import React from "react";
import { highlightedCourseList } from "../../utils/AppConstant";

const MoreCourses = ({ header, cityData }) => {
  return (
    <div className="container moreCourses">
      {!header && (
        <h3>
          <i className="fa fa-book"></i> More Courses by{" "}
          <span style={{ color: "#5658dd" }}>Edusession</span>
        </h3>
      )}
      {header && (
        <h3>
          {" "}
          <i className="fa fa-book"></i> {header}
        </h3>
      )}
      <ListGroup>
        {highlightedCourseList.map((item) => {
          return (
            <ListGroupItem>
              <Link
                href={`${item.link}${cityData?.cityData ? `&city=${cityData.city}` : ""}`}
              >
                <a>{item.label}</a>
              </Link>
            </ListGroupItem>
          );
        })}
        <ListGroupItem>
          <Link href={"/book-form"}>
            <a>... All Courses</a>
          </Link>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default MoreCourses;
