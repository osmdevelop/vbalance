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

function Contact() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = {
    name: name,
    email: email,
  };

  try {
    const response = await fetch('/.netlify/functions/submit-form', { // Adjust the path if your function has a different name
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Form submitted successfully!');

      // You might want to display a success message to the user here
      setName('');
      setEmail('');
    } else {
      console.error('Error submitting form:', response.status);
      // Handle errors gracefully, perhaps display an error message to the user
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    // Handle network errors or other unexpected issues
  }
};

    return (
    <div>
            <form name="contact" hidden>
            <p>
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>
        </form>
        <p>
        <label htmlFor="name">Your Name: </label>
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
        <label htmlFor="email">Email:</label>
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
    </div>
  );
}

export default Contact;