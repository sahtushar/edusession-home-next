import {
  Card,
  CardBody,
  CardGroup,
  CardHeader,
  CardImg,
  CardText,
  CardTitle,
  Toast,
  ToastBody,
  ToastHeader,
} from "reactstrap";

import MyImage from "../elements/MyImage";
import React from "react";
import SectionHeader from "./partials/SectionHeader";
import classNames from "classnames";
import pic1 from "./../../assets/images/1-2-e1668683404793.png";
import pic2 from "./../../assets/images/6-1-e1668683422908.png";
import pic3 from "./../../assets/images/4-1-e1668683484397.png";
import pic4 from "./../../assets/images/3-1-e1668683505601.png";
import pic5 from "./../../assets/images/2-1-e1668683523226.png";

const Approach = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "approach section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "approach section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: (
      <>
        <i className="fa fa-cogs"></i> How we Do it?
      </>
    ),
    paragraph: `Phone’s addiction can be turned into a fruitful method of learning by Edu session.  We use technology to personalize the learning experience for each learner based on their strengths, weaknesses, and learning style. Our application provides well researched study material including textbooks, model test papers and other learning material.  Our perfect combination of practical and theoretical learning material doesn’t allow students to get bored of learning. 
      Our application is not only benefits students but also to the parents as they can check the progress of their wards. We analyse the strength and weakness of child and work accordingly to provide better results.      
      `,
  };
  let mapper = [
    {
      main: "Approach",
      img: pic1,
      subtext:
        "Teaching method for development of problem solving skills and reasoning",
    },
    {
      main: "Assessments",
      img: pic2,
      subtext:
        "Regular assessment conducted to analyse students relative performance",
    },
    {
      main: "Analysis",
      img: pic3,
      subtext: "Personalized analysis of student progress and performance",
    },
    {
      main: "Faculty",
      img: pic4,
      subtext:
        "Dedicated and highly qualified faculty specialised in each subject",
    },
    {
      main: "Resources",
      img: pic5,
      subtext: "Comprehensive study material for each chapter in syllabus",
    },
  ];
  return (
    <section {...props} className={outerClasses} id="howedoit">
      <div>
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            from="approachHeader"
            tag="h3"
          />
          <div className="approachWrapper">
            {mapper.map((item) => {
              return (
                <Card className="my-2" color="light" inverse>
                  {/* <img src={item.img} top /> */}
                  <article>
                    <MyImage alt="approach" src={item.img} />
                    <CardHeader tag="h4" className="mt-0">
                      {item.main}
                    </CardHeader>
                    <CardBody>
                      <CardTitle tag="p">{item.subtext}</CardTitle>
                      {/* <CardText className="m-0">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText> */}
                    </CardBody>
                  </article>
                </Card>

                // <div className="p-3 bg-danger my-2 rounded">
                //   <Toast>
                //     <ToastHeader>{item.main}</ToastHeader>
                //     <ToastBody>{item.text}</ToastBody>
                //   </Toast>
                // </div>
              );
            })}
          </div>
          {/* <div className="p-3 bg-warning my-2 rounded">
              <Toast>
                <ToastHeader>Reactstrap</ToastHeader>
                <ToastBody>
                  This is a toast on a warning background — check it out!
                </ToastBody>
              </Toast>
            </div>
            <div className="p-3 bg-info my-2 rounded">
              <Toast>
                <ToastHeader>Reactstrap</ToastHeader>
                <ToastBody>
                  This is a toast on an info background — check it out!
                </ToastBody>
              </Toast>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Approach;
