import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Table,
} from "reactstrap";
import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { SectionProps } from "../../utils/SectionProps";
import { callRequestedForms } from "../../services/authroutes";
import classNames from "classnames";
import { getLoginItems } from "../../utils/AppConstant";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
};

const ProfilePage = ({
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
    "profilePage section",
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
  const [classes, setclasses] = useState([]);
  const [data, setData] = useState({});
  useEffect(() => {
    let body = {
      username: localStorage.getItem("username"),
    };
    setIsLoading(true);
    callRequestedForms(body)
      .then((res) => {
        setclasses(res.data.forms || []);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
    setData({
      name: getLoginItems(window).name,
      email: getLoginItems(window).email,
      mobile: getLoginItems(window).mobile,
    });
  }, []);

  return (
    <section {...props} className={outerClasses}>
      <div>
        <div className={innerClasses}>
          <div className="container rounded bg-white mt-1 mb-5">
            <h1>
              Your <span className="detailsHeader">Edusession</span> Dashboard
            </h1>
            <div className="row requestedclass">
              <Card className="my-2">
                <CardBody>
                  <CardTitle tag="h3">Your Details</CardTitle>
                  <ListGroup flush>
                    <ListGroupItem>
                      <span className="detailsHeader">Name:</span> {data.name}
                    </ListGroupItem>
                    <ListGroupItem>
                      <span className="detailsHeader">Email:</span> {data.email}
                    </ListGroupItem>
                    <ListGroupItem>
                      <span className="detailsHeader">Mobile:</span>{" "}
                      {data.mobile}
                    </ListGroupItem>
                  </ListGroup>{" "}
                </CardBody>
              </Card>
            </div>
            <div className="row requestedclass">
              <Card className="my-2">
                <CardBody>
                  <CardTitle tag="h3">Classes you Requested</CardTitle>
                  <Table hover responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Course/Grade</th>
                        <th>Subject</th>
                        <th>Any Special Request</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classes.map((item, index) => {
                        return (
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.course}</td>
                            <td>{item.subject}</td>
                            <td>{item.specialRequirement}</td>
                            {/* <td style={{ color: "#5658dd" }}>
                              +91 82378 15800
                            </td> */}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                  {/* <CardText>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </CardText> */}
                  <p className="callMsg">
                    Call us for any query at{" "}
                    <span style={{ color: "#5658dd", fontWeight: "bold" }}>
                      +91 82378 15800
                    </span>
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProfilePage.propTypes = propTypes;
ProfilePage.defaultProps = defaultProps;

export default ProfilePage;
