import { ListGroup, ListGroupItem } from "reactstrap";

import Link from "next/link";
import React from "react";
import { highlightedCourseList } from "../../utils/AppConstant";

const MoreCourses = ({ header }) => {
  return (
    <div className="container moreCourses">
      {!header && (
        <h2>
          <i className="fa fa-book"></i> More Courses by{" "}
          <span style={{ color: "#5658dd" }}>Edusession</span>
        </h2>
      )}
      {header && (
        <h2>
          {" "}
          <i className="fa fa-book"></i> {header}
        </h2>
      )}
      <ListGroup>
        {highlightedCourseList.map((item) => {
          return (
            <ListGroupItem>
              <Link href={item.link}>
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
