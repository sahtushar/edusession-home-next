import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Toast,
  ToastBody,
  ToastHeader,
} from "reactstrap";
import {
  getCourseData,
  getCourseDataUrl,
  removeSpacesAndReplaceSymbols,
} from "../../utils/AppConstant";

import Button from "../elements/Button";
import ButtonGroup from "../elements/ButtonGroup";
import Link from "next/link";
import React from "react";
import SectionHeader from "./partials/SectionHeader";
import classNames from "classnames";
import { iteratee } from "lodash";
import { useRouter as useHistory } from "next/router";

const Courses = ({
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
  city,
  ...props
}) => {
  const outerClasses = classNames(
    "courses section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "courses section-inner",
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
        <i className="fa fa-copy"></i>{" "}
        {`Courses We Provide ${city ? `in ${city}` : ""}`}
      </>
    ),
    paragraph: "",
  };

  const history = useHistory();
  const getButton = (link) => {
    return (
      <ButtonGroup>
        <Button color="primary">
          <Link href={`/book-form?course=${getCourseDataUrl[link]}`}>
            Book Class
          </Link>
        </Button>
        {getCourseData?.[getCourseDataUrl?.[link]] && (
          <Button color="primary">
            <Link href={`/courses?course=${getCourseDataUrl[link]}`}>
              Learn More
            </Link>
          </Button>
        )}
      </ButtonGroup>
    );
  };
  let coursesHomePage = {
    "Class 6":
      "Class 6 online courses cover a wide range of subjects, including Mathematics, Science, Social Studies, and English. The Mathematics topics include basic operations, geometry, and algebra. The Science topics cover topics such as matter, energy, and living organisms. In Social Studies, students learn about history, geography, and civics. In English, students develop their reading, writing, and communication skills. Students in Class 6 are also introduced to basic computer skills, such as typing, internet usage, and coding.",

    "Class 7 (CBSE / ICSE / State Boards)":
      "Class 7 online courses cover advanced topics in Mathematics, Science, Social Studies, and English. The Mathematics topics include integers, fractions, and algebraic expressions. The Science topics cover topics such as force and motion, light and sound, and basic chemistry. In Social Studies, students learn about the world, ancient civilizations, and contemporary issues. In English, students develop their reading, writing, and critical thinking skills. Additionally, students in Class 7 are introduced to basic programming concepts and computer applications.",

    "Class 8":
      "Class 8 online courses cover more advanced topics in Mathematics, Science, Social Studies, and English. The Mathematics topics include geometry, algebra, and data handling. The Science topics cover topics such as sound, light, and force, and basic biology. In Social Studies, students learn about India's history, geography, and economy. In English, students develop their communication skills and literary analysis abilities. In addition, students in Class 8 learn about digital literacy, such as internet safety, coding, and data management.",

    "Class 9":
      "Class 9 online courses focus on preparing students for higher studies and cover advanced topics in Mathematics, Science, Social Studies, and English. In Mathematics, students learn about real numbers, polynomials, and coordinate geometry. The Science topics cover topics such as physics, chemistry, and biology. In Social Studies, students learn about India's democratic institutions, international relations, and contemporary issues. In English, students develop their communication skills and critical thinking abilities. In addition, Class 9 students learn about career-oriented skills such as entrepreneurship, financial literacy, and innovation.",

    "Class 10":
      "Class 10 online courses provide a deeper understanding of advanced topics in Mathematics, Science, Social Studies, and English. In Mathematics, students learn about trigonometry, probability, and statistics. The Science topics cover advanced physics, chemistry, and biology. In Social Studies, students learn about the world economy, democracy, and globalization. In English, students develop their analytical and communication skills. In addition, Class 10 students learn about environmental studies, gender studies, and human rights.",

    "Class 11":
      "Class 11 online courses focus on preparing students for higher education and cover a range of subjects, including Mathematics, Physics, Chemistry, Biology, Accountancy, Business Studies, and English. In Mathematics, students learn about calculus, statistics, and linear programming. In Science, students learn about the laws of motion, thermodynamics, and organic chemistry. In Commerce, students learn about financial accounting, business laws, and entrepreneurship. In English, students develop their critical thinking and communication skills. In addition, Class 11 students are introduced to computer science and information technology.",
    "Class 12":
      "Class 12 online courses cover a range of subjects, including Mathematics, Physics, Chemistry, Biology, Accountancy, Business Studies, and English. In Mathematics, students learn about calculus, linear algebra, and probability. In Science, students learn about advanced topics such as particle physics, organic chemistry, and genetics. In Commerce, students learn about financial management, marketing, and macroeconomics. In English, students develop their writing and communication skills. Additionally, Class 12 students are introduced to entrepreneurship, legal studies, and global perspectives.",
    "JEE Foundation":
      "JEE Foundation online courses focus on preparing students for the Joint Entrance Examination (JEE), which is required for admission to the Indian Institutes of Technology (IITs) and other prestigious engineering colleges in India. The courses cover topics such as Physics, Chemistry, and Mathematics. In Physics, students learn about mechanics, optics, and electromagnetism. In Chemistry, students learn about organic, inorganic, and physical chemistry. In Mathematics, students learn about calculus, algebra, and trigonometry. The courses also include mock tests and practice papers to help students prepare for the JEE.",
    "CA Foundation and Intermediate":
      "CA Foundation and Intermediate online courses are designed for students who wish to pursue a career in Chartered Accountancy. The courses cover topics such as financial accounting, economics, taxation, and business laws. In Financial Accounting, students learn about accounting principles, preparation of financial statements, and accounting for partnership firms. In Economics, students learn about macroeconomics, microeconomics, and international economics. In Taxation, students learn about direct and indirect taxes, and tax planning. In Business Laws, students learn about the Indian Contract Act, Companies Act, and the Partnership Act. The courses also include practical training and mock tests to help students prepare for the Chartered Accountancy exams.",

    "IELTS (UKVI - Academic - General)":
      "IELTS (International English Language Testing System) online courses are designed to help students improve their English language proficiency, specifically for those who want to study or work in English-speaking countries. The courses focus on the four language skills: listening, reading, writing, and speaking. In the IELTS (UKVI - Academic) course, students learn academic vocabulary, academic writing, and critical reading skills. In the IELTS (UKVI - General) course, students learn general vocabulary, writing emails, and socializing in English. The courses include practice tests and personalized feedback to help students improve their scores on the IELTS exam.",

    "Spoken English":
      "Spoken English online courses are designed to help students improve their oral communication skills in English. The courses cover topics such as pronunciation, intonation, grammar, and vocabulary. In addition to the basics, students also learn how to participate in group discussions, presentations, and job interviews. The courses include interactive sessions with teachers, personalized feedback, and practical exercises to help students build their confidence in spoken English.",
    "JEE Mains and Advanced (MH-CET and GCET)": `JEE Mains and Advanced, MH-CET & GCET are entrance exams for students aspiring to 
      study engineering in the top institutes of India. The online classes cover topics 
      like Physics, Chemistry, and Mathematics in a comprehensive and in-depth manner. 
      The classes also focus on enhancing problem-solving skills, 
      time management, and exam strategies to help students excel in the competitive exams.`,
    "NEET UG": `NEET UG is an entrance exam for students aspiring to pursue medical courses in the top 
      colleges of India. The online classes for NEET UG cover topics like Physics, Chemistry, 
      and Biology in a comprehensive and in-depth manner. The classes also focus on 
      enhancing problem-solving skills, time management, and exam strategies to help 
      students excel in the competitive exam. Additionally, the classes provide regular 
      mock tests, doubt clearing sessions, and personalized attention to help students
      prepare effectively for the exam. The online classes for NEET UG are designed to 
      provide an immersive learning experience that helps students build a strong 
      foundation in the subject matter and enables them to perform well in the exam.`,
  };

  return (
    <section {...props} className={outerClasses} id="courses">
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            from="coursesDetailsHeader"
            tag="h3"
          />
          <div className="coursesDetails">
            {Object.keys(coursesHomePage).map((item) => {
              return (
                <Card className="my-2" color="light" inverse>
                  <article>
                    <CardHeader tag="h3" className="mt-0 mb-16">
                      {item}
                    </CardHeader>
                    <CardBody>
                      <CardText className="m-0" tag="p">
                        {coursesHomePage[item]}{" "}
                      </CardText>
                    </CardBody>
                    {getButton(item)}
                  </article>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
