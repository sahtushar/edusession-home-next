import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import React, { useState } from "react";

import PropTypes from "prop-types";
import SectionHeader from "./partials/SectionHeader";
import { SectionProps } from "../../utils/SectionProps";
import classNames from "classnames";

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
    title: (
      <>
        <i className="fa fa-question-circle"></i> {data?.faq?.title}
      </>
    ),
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container faqWrapper">
        <div className={`${innerClasses}`}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            from="faqIntro"
            tag="h3"
          />
          <div
            className="container"
            itemscope=""
            itemtype="https://schema.org/FAQPage"
          >
            <Accordion open={open} toggle={toggle}>
              {data?.faq?.data?.map((item, index) => {
                return (
                  <section
                    itemscope=""
                    itemprop="mainEntity"
                    itemtype="https://schema.org/Question"
                  >
                    <AccordionItem key={item.question || item.Question}>
                      <AccordionHeader
                        tag="h3"
                        targetId={`${index + 1}`}
                        itemprop="name text"
                      >
                        {item.question || item.Question}
                      </AccordionHeader>
                      <div
                        itemprop="suggestedAnswer acceptedAnswer"
                        itemscope=""
                        itemtype="https://schema.org/Answer"
                      >
                        <div itemprop="text">
                          <AccordionBody tag="p" accordionId={`${index + 1}`}>
                            {item.answer || item.Answer}
                          </AccordionBody>
                        </div>
                      </div>
                    </AccordionItem>
                  </section>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

FAQ.propTypes = propTypes;
FAQ.defaultProps = defaultProps;

export default FAQ;
