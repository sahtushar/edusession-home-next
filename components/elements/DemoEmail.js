const DemoEmail = ({ name, courseName, date, time }) => {
    return `<div style="background-color: #f5f5f5; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <div style="margin-bottom: 20px; text-align: center;">
        <img src="https://edusession.live/_next/static/media/logo-no-background.7c66c390.png" alt="Company Logo" style="max-width: 200px;">
      </div>
      <div style="background-color: #f2f2f2; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
        <h1>Welcome to Edusession Live!</h1>
      </div>
      <div style="margin-bottom: 20px; font-size: 15px; line-height: 25px;">
        <p>Dear ${name},</p>
        <p>Thank you for showing interest in our <span style="color: rgb(86, 88, 221);">One to One</span> Online course. We are pleased to inform you that a Demo Class has been scheduled for the following course:</p>
        <p>Course: <span style="color: rgb(86, 88, 221);">${courseName}</span></p>
        <p>Date: <span style="color: rgb(86, 88, 221);">${date}</span></p>
        <p>Time: <span style="color: rgb(86, 88, 221);">${time}</span></p>
        <p>Demo Link will be shared by Whatsapp/email/message before the scheduled date and time. Please make sure to mark your calendar and be ready to attend the <span style="color: rgb(86, 88, 221);">Demo Class.</span> It's a great opportunity to experience our teaching style and course content firsthand.</p>
        <p>If you have any questions or need further assistance, please feel free to reach out to us.</p>
        <p>Best regards,</p>
        <p>The Edusession Team</p>
      </div>
      <div style="margin-top: 30px;">
        <p>Contact us:</p>
        <p>Email: support@edusession.live</p>
        <p>Phone: +91 82378 15800</p>
        Website: <a href="https://edusession.live">edusession.live</a>
      </div>
    </div>
  </div>
  `;
  };
  
  export default DemoEmail;
  