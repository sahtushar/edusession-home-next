const EdusessionWelcome = (props) => {
  return `<div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
    <div style="margin-bottom: 20px; text-align: center;">
      <img src="https://edusession.live/_next/static/media/logo-no-background.7c66c390.png" alt="Company Logo" style="max-width: 120px;">
           <img width="100px" src="https://edusession.live/_next/static/media/u5.03301891.png" style="text-align: center;"/>
    </div>
    <div style="background-color: #f2f2f2; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
      <h2>Welcome to Edusession Live!</h2>
    </div>
    <div style="margin-bottom: 20px; font-size:15px; line-height: 26px;">
      <p>Dear <span style="color:rgb(86, 88, 221);">${props.fullName}</span>,</p>
      <p>Thank you for showing interest in a <span style="color:rgb(86, 88, 221);; font-weight: bold;">Free Demo</span> of our online course. We're excited to have you on board!</p>
      <p>Get the best interactive personalized <span style="color:rgb(86, 88, 221);font-weight: bold;">One-on-one</span> sessions at your time and comfort with your preferred faculties for <span style="color:rgb(86, 88, 221);">CBSE, ICSE, JEE, NDA, NEET, State Board, Spoken English, IELTS and Competitive examinations </span> preparation. Doubt clearance is now easy with focused  <span style="color:rgb(86, 88, 221);font-weight: bold;">1-on-1 tuition </span> by best Online tutors.</p>
      <p>If you have any questions or need assistance, feel free to reach out to us. We're here to support you.</p>
      <p><a href="https://edusession.live/sign-in">Sign In/Up with Us!</a></p>
      <p>Get ready to expand your knowledge and unlock new opportunities!</p>
      <p>Best regards,</p>
      <p style="color:rgb(86, 88, 221); font-weight: 600;">The Edusession Team</p>
    </div>
    <div style="margin-top: 30px;">
      <p>Contact us:</p>
      <p>Email: support@edusession.live</p>
      <p>Phone: +91 82378 15800</p>
      <p>Website: <a href="https://edusession.live">edusession.live</a></p>
    </div>
  </div>
</div>`;
};

export default EdusessionWelcome;
