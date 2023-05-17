import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

import MyImage from "../elements/MyImage";
import PropTypes from "prop-types";
import React from "react";
import SectionHeader from "./partials/SectionHeader";
import { SectionProps } from "../../utils/SectionProps";
import classNames from "classnames";
import styled from "styled-components";
import { useRouter as useHistory } from "next/router";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
};

const CareerGuidance = ({
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
    "career-guidance section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const history = useHistory();

  const sectionHeader1 = {
    title: "How We Do it?",
    paragraph:
      "In today's competitive world, choosing the right career path is crucial for students as it sets the foundation for their future success. Class 10th and Class 12th mark significant milestones in a student's academic journey, and making informed decisions during this phase can shape their professional trajectory. At Edusession, we understand the importance of career guidance for Class 10th and Class 12th students, and we aim to provide comprehensive support to help them navigate through this crucial period.",
  };
  const sectionHeader2 = {
    title: "What we do?"
  };
  return (
    <section {...props} className={outerClasses}>
      <div>
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader1}
            className="center-content"
            from="career-guidance"
          />
          <div className="py-5 howedoit" style={{ padding: "20px" }}>
            <div>
              <Row>
                <Col md="3" className="mb-3">
                  <Card>
                    <CardImg top src="/image (6).png" alt="Image 2" />
                    <CardBody>
                      <CardTitle tag="h3">
                        Navigate the Maze of Career Choices with Confidence
                      </CardTitle>
                      <CardText>
                        Are you feeling overwhelmed by the countless career
                        options available? Edusession is here to guide you
                        through the maze, providing personalized career
                        counseling and valuable insights into various fields.
                        Get the clarity and confidence you need to make the
                        right choice.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3" className="mb-3">
                  <Card>
                    <CardImg top src="/image (7).png" alt="Image 3" />
                    <CardBody>
                      <CardTitle tag="h3">
                        Stand Out from the Crowd: Find Your Unique Career Path
                      </CardTitle>
                      <CardText>
                        Don't settle for a cookie-cutter career. Edusession
                        empowers you to explore your passions and interests,
                        identifying your unique talents and strengths. Discover
                        a career path that aligns with your individuality and
                        sets you apart from the crowd.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3" className="mb-3">
                  <Card>
                    <CardImg top src="/image (3).png" alt="Image 4" />
                    <CardBody>
                      <CardTitle tag="h3">
                        Maximize Your Opportunities: Expert Advice for Success
                      </CardTitle>
                      <CardText>
                        Edusession connects you with experienced professionals
                        who have excelled in their respective fields. Benefit
                        from their expertise and gain valuable insights into
                        industry trends, educational requirements, and skill
                        development. Maximize your opportunities for success.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3" className="mb-3">
                  <Card>
                    <CardImg top src="/image (4).png" alt="Image 5" />
                    <CardBody>
                      <CardTitle tag="h3">
                        Invest in Your Future: Secure a Rewarding Career
                      </CardTitle>
                      <CardText>
                        Your education and career decisions shape your future.
                        Edusession helps you make smart choices and invest in a
                        rewarding career. With our guidance, you can embark on a
                        path that ensures long-term growth, job satisfaction,
                        and financial stability.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
            <div style={{marginTop:"5rem"}}>
              <Row>
                <SectionHeader
                  data={sectionHeader2}
                  className="center-content"
                  from="career-guidance"
                />
              </Row>
              <Row>
                <Col md="6" className="mb-3">
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5">Exploring Career Options</CardTitle>
                      <CardText>
                        Finding the right career path begins with exploring
                        various options. We believe in empowering students with
                        knowledge about different fields, industries, and job
                        roles. Our career guidance program offers detailed
                        insights into diverse career opportunities, helping
                        students understand the skills, qualifications, and
                        growth prospects associated with each field. By
                        providing comprehensive information, we enable students
                        to make informed decisions based on their interests,
                        strengths, and aspirations.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6" className="mb-3">
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5">
                        Assessing Aptitudes and Interests
                      </CardTitle>
                      <CardText>
                        Understanding one's aptitudes and interests is vital
                        when it comes to making career choices. Our team of
                        experienced career counselors assists Class 10th and
                        Class 12th students in identifying their strengths,
                        weaknesses, and areas of interest. Through
                        scientifically designed aptitude tests and personalized
                        counseling sessions, we help students gain clarity about
                        their potential career paths. By aligning their passions
                        and talents with suitable professions, we aim to guide
                        students towards fulfilling and rewarding careers.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col md="6" className="mb-3">
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5">
                        Offering Career-Related Workshops
                      </CardTitle>
                      <CardText>
                        To enhance students' knowledge and skills, we organize
                        interactive workshops focused on various career-related
                        topics. These workshops cover subjects like resume
                        writing, interview preparation, communication skills,
                        and professional etiquette. By equipping students with
                        these essential competencies, we prepare them to
                        confidently face the challenges of the job market. Our
                        industry experts and experienced trainers provide
                        valuable insights and practical tips to help students
                        stand out in their chosen fields.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6" className="mb-3">
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5">
                        Connecting Students with Industry Professionals
                      </CardTitle>
                      <CardText>
                        Networking plays a significant role in career
                        development, and we believe in providing students with
                        opportunities to connect with industry professionals.
                        Our career guidance program facilitates mentoring
                        sessions, industry visits, and internships to expose
                        students to real-world scenarios. By interacting with
                        professionals from different fields, students gain
                        valuable insights into the practical aspects of their
                        desired careers. These interactions foster mentorship,
                        inspire students, and broaden their horizons.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col md="6" className="mb-3">
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5">
                        Providing Scholarship and Educational Assistance
                        Information
                      </CardTitle>
                      <CardText>
                        We understand that financial constraints can pose
                        challenges for students aspiring to pursue higher
                        education. To alleviate this burden, our career guidance
                        program includes comprehensive information about
                        scholarships, grants, and educational assistance
                        programs. We provide students with the latest updates on
                        available opportunities, eligibility criteria, and
                        application processes. By guiding them through these
                        resources, we aim to make quality education accessible
                        to deserving students.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6" className="mb-3">
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5">
                        Personalized Career Counselling
                      </CardTitle>
                      <CardText>
                        Every student is unique, and their career choices should
                        reflect their individuality. Our personalized career
                        counseling sessions are designed to cater to the
                        specific needs and aspirations of Class 10th and Class
                        12th students. Our experienced career counselors provide
                        one-on-one guidance, addressing students' concerns, and
                        helping them develop realistic career plans. By
                        considering factors such as academic performance,
                        personality traits, and long-term goals, we assist
                        students in making well-informed decisions.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

CareerGuidance.propTypes = propTypes;
CareerGuidance.defaultProps = defaultProps;

export default CareerGuidance;
