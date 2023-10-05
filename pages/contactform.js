import ContactFormView from "../views/ContactForm";
import React from "react";
import { activeCities } from "../utils/AppConstant";
import { useRouter as useHistory } from "next/router";

const ContactForm = (props) => {
  const history = useHistory();
  const { course } = history.query;
  const { city } = history.query;
  return (
    <ContactFormView
      setIsLoading={props.setIsLoading}
      course={course}
      cityData={{ cityData: activeCities?.[city], city: city }}
    />
  );
};

export default ContactForm;
