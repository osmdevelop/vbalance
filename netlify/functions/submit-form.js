/* eslint-disable prettier/prettier */
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const data = JSON.parse(event.body);
  const { name, email } = data;

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Use your Gmail or Outlook SMTP settings here
    // Example for Outlook:
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'vira.boichuk@vbalance.com',
      pass: 'Vira1985@',
    },
  });

  // Compose the email message
  const mailOptions = {
    from: 'vira.boichuk@vbalance.com', // Or your Outlook email
    to: 'vira.boichuk@vbalance.com', // The email where you want to receive submissions
    subject: `New Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    return {
      statusCode: 200,
      body: 'Success!',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: 'Error sending email',
    };
  }
};