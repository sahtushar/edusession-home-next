import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
};

const FAQ = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  data,
  ...props
}) => {
  const [open, setOpen] = useState("-1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const outerClasses = classNames(
    "faq section",
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
    title: data?.faq?.title,
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container faqWrapper">
        <div className={`${innerClasses}`}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            from="faqIntro"
          />
          <div className="container">
            <article className="faqarticle">
              <Accordion open={open} toggle={toggle}>
                {data?.faq?.data?.map((item, index) => {
                  return (
                    <AccordionItem>
                      <AccordionHeader tag="h3" targetId={`${index + 1}`}>
                        {item.question}
                      </AccordionHeader>
                      <AccordionBody tag="p" accordionId={`${index + 1}`}>
                        {item.answer}
                      </AccordionBody>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

FAQ.propTypes = propTypes;
FAQ.defaultProps = defaultProps;

export default FAQ;
