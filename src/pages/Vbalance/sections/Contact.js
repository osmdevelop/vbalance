/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
// @mui material components
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
// import MKBox from "components/MKBox";
// import MKInput from "components/MKInput";
// import MKButton from "components/MKButton";
// import MKTypography from "components/MKTypography";

// import TodayIcon from '@mui/icons-material/Today';

// calendly

// Images
// import bgImage from "assets/images/examples/blog2.jpg";

function ContactUsTwo() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit
 = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // You can add any custom logic here, like sending data to an external service

    console.log('Form submitted:', { name, email }); // Log form data to the console

    // Reset the form fields after submission
    setName('');
    setEmail('');
  };
    return (
        <form name="contact" netlify data-netlify-honeypot="bot-field"> {/* Netlify attributes */}
      <p>
        <label htmlFor="name">Your ame: </label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </p>
      <p>
        <label htmlFor="email">Email:
 </label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </p>

      <p>
        <button type="submit" onClick={handleSubmit}>Send</button>
      </p>
    </form>
  );
}

export default ContactUsTwo;