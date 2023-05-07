import PropTypes from "prop-types";
import React from "react";
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

const Legal = ({
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
    "legal section",
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

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
        <div className="legalwrapper flex_align_justify">
  <div className="tc_wrap">
    {/* <div className="tabs_list">
      <ul>
        <li data-tc="tab_item_1" className="active">Terms of services</li>
        <li data-tc="tab_item_2">Privacy Policy</li>
        <li data-tc="tab_item_3">Disclaimer</li>
      </ul>
    </div> */}
    <div className="tabs_content">
      <div className="tab_head">
        <h2>Privacy terms and Disclaimer</h2>
      </div>
      <div className="tab_body">
        <div className="tab_item tab_item_1">
          <h3>Services</h3>
          <p>Edusession provides a platform for users to schedule and receive personalized one-to-one teaching
            sessions with qualified teachers. We also offer other related services, including scheduling, payment
            processing, and customer support. By using our platform, you agree to comply with these Terms of Service
            and any other policies we may post on our website.</p>
          <h3>Enrollment</h3>
          <p>To enroll in a class, the student must provide all necessary information requested by the teacher,
            including personal information and payment details.</p>
          <h3>Payment</h3>
          <p>Class payment must be made in full before the start of the first session. Payment can be made through the
            teacher's designated payment method, such as UPI, or debit card, credit cards, debit cards, or net
            banking.</p>
          <h3>Refunds</h3>
          <p>Refunds will only be given if the teacher cancels a class or if the student cancels the class at least 24
            hours prior to the start of the first session.</p>
          <h3>Scheduling</h3>
          <p>The teacher and student will work together to schedule classes at a mutually agreed-upon time.</p>
          <h3>Attendance</h3>
          <p>The student must attend all scheduled classes. If the student misses a class, they will not be entitled
            to a refund or make-up class.</p>
          <h3>Content</h3>
          <p>The teacher will provide personalized instruction and materials to the student based on their needs and
            goals. The student agrees to use the materials and instruction provided by the teacher only for their own
            personal use.</p>
          <h3>User Conduct</h3>
          <p>You agree to use our platform for lawful purposes and to comply with all applicable laws and regulations.
            You agree not to engage in any conduct that could harm our platform or interfere with the use of our
            services by others. You agree not to impersonate others or use our platform for any fraudulent or illegal
            purposes.</p>
          <h3>Confidentiality</h3>
          <p>The teacher and student agree to maintain the confidentiality of all information exchanged during the
            course of their classes.</p>
          <h3>Limitation of Liability</h3>
          <p>The teacher will not be liable for any damage or loss incurred as a result of the student's use of the
            materials or instruction provided during the course of the classes.
          </p>
          <h3>Dispute Resolution</h3>
          <p>Any disputes arising from the classes will be resolved through good-faith negotiations between the
            teacher and student. If a resolution cannot be reached, the parties may seek resolution through
            alternative dispute resolution methods, such as mediation or arbitration.</p>
        </div>
        <div className="tab_item tab_item_2">
          <h3>Collection of Information</h3>
          <p>We collect personal information from you when you register with us, including your name, email address,
            phone number, and payment information. We may also collect information about your usage of our platform,
            including session history, feedback, and communication with our support team.
          </p><h3>Use of Information</h3>
          <p>We use your personal information to provide you with our services, including scheduling and delivering
            one-to-one teaching sessions. We may also use your information to communicate with you about our services,
            provide customer support, and to improve our platform. We may use anonymous or aggregated data to analyze
            usage patterns, develop new features, and improve our services.
          </p>
          <h3>Security of Information</h3>
          <p>We take reasonable measures to protect your personal information, including using encryption technologies
            and secure servers. However, no method of transmission over the internet or electronic storage is
            completely secure, and we cannot guarantee the absolute security of your information.</p>
          <h3>Sharing of Information</h3>
          <p>We do not sell or rent your personal information to third parties. We may share your personal information
            with our trusted service providers who assist us in delivering our services to you. We may also disclose
            your personal information if required by law or to protect our legal rights.</p>
          <h3>Cookies</h3>
          <p>We use cookies and other tracking technologies to collect information about your use of our platform,
            such as your preferences and browsing history. You can set your browser to refuse all or some cookies, or
            to alert you when cookies are being sent. However, if you disable or refuse cookies, some parts of our
            platform may become inaccessible or not function properly.</p>
          <h3>Changes to Privacy Policy</h3>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.
          </p>
          <h3>Consent</h3>
          <p>By using our one-to-one personalized online teaching platform, you consent to the collection, use, and
            disclosure of your personal information as described in this Privacy Policy.</p>
        </div>
        <div className="tab_item tab_item_3">
          <h3>Disclaimers and Limitation of Liability</h3>
          <p>Our platform and services are provided on an "as-is" and "as available" basis, without any warranties or
            representations. We do not guarantee that our platform will be error-free, uninterrupted, or secure. We
            are not liable for any damages or losses arising from your use of our platform or services, including any
            direct, indirect, incidental, or consequential damages.</p>
          <h3>Indemnification</h3>
          <p>You agree to indemnify and hold us harmless from any claims, damages, or losses arising from your use of
            our platform or services, or from any breach of these Terms of Service.</p>
          <h3>Governing Law</h3>
          <p>These terms and conditions will be governed by the laws of the jurisdiction in which the teacher resides.
          </p>
          <h3>Changes to Terms of Service</h3>
          <p>We may update these Terms of Service from time to time, and we will notify you of any changes by posting
            the new Terms of Service on our website. You are advised to review these Terms of Service periodically for
            any changes.</p>
          <p>Note : By agreeing to these terms and conditions, the student agrees to be bound by these rules and
            agrees to use the teacher's services in accordance with these terms.</p>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

Legal.propTypes = propTypes;
Legal.defaultProps = defaultProps;

export default Legal;
