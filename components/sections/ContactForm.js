import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
} from "reactstrap";
import React, { useEffect, useState } from "react";

import MyImage from "../elements/MyImage";
import PropTypes from "prop-types";
import { SectionProps } from "../../utils/SectionProps";
import { callPromoSubmit } from "../../services/authroutes";
import classNames from "classnames";
import img from "./../../assets/images/browser/chemistry.png";
import { useRouter as useHistory } from "next/router";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
};

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
};

const ContactForm = ({
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
    "contactform section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "section-inner contactforminner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const history = useHistory();
  useEffect(() => {
    validateForm();
  }, [name, emailValid, phoneValid]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValid) {
      const data = {
        name: name,
        email: email,
        mobile: `${phone}`,
        course: "NEET/JEE Chemistry",
        src: "contactform",
      };
      try {
        await callPromoSubmit(data);
        console.log("Form submitted successfully with data:", data);
        alert(
          "We have got your details! Now relax and meanwhile you can explore our website for more courses!"
        );
        setName("");
        setEmail("");
        setEmailValid(false);
        setPhone("");
        setPhoneValid(false);
        setFormValid(false);
        history.push("/");
      } catch (error) {
        console.error("Error submitting form:", error);
        // optionally, display an error message to the user
      }
    }

    // send form data to server or do something else with it
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(regex.test(email));
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    setPhoneValid(regex.test(phone));
  };

  const validateForm = () => {
    setFormValid(name && emailValid && phoneValid);
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="formsection">
            <h1>
              <span>Book Demo - </span>
              <span>NEET/JEE Chemistry</span> Online Course by Edusession
            </h1>
            <p>
              Fill the contact details and we will contact you for Free Demo
              Booking and further process.
            </p>
            <Form onSubmit={handleSubmit}>
              <FormGroup className="inputform">
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="inputform">
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => validateEmail(email)}
                  invalid={email && !emailValid}
                  required
                />
                <FormFeedback>Please enter a valid email address.</FormFeedback>
              </FormGroup>
              <FormGroup className="inputform">
                <Label for="phone">Phone</Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={() => validatePhone(phone)}
                  invalid={phone && !phoneValid}
                  required
                />
                <FormFeedback>
                  Please enter a 10-digit phone number.
                </FormFeedback>
              </FormGroup>
              <Button
                color="primary"
                className="btn"
                type="submit"
                disabled={!formValid}
              >
                Submit
              </Button>
              <p className="mt-2 privacytext">
                By Submitting you agree to all our Policy, Disclaimer, Terms and
                conditions.
              </p>
            </Form>
          </div>
          <div className="courseimg">
            <MyImage src={img} alt="neet chemistry promo" />
          </div>
        </div>
      </div>
    </section>
  );
};

ContactForm.propTypes = propTypes;
ContactForm.defaultProps = defaultProps;

export default ContactForm;
