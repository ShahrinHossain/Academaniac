import React from "react";
import "./Help.css"; // Ensure this CSS file is created and styled


const Help = () => {
    return (
      <div className="help-container">
        <h1>University Application Helpline</h1>
        <p>Welcome to the University Application Helpline. Here you will find information on how to apply to various universities.</p>
        
        <section className="help-section">
          <h2>Step-by-Step Guide</h2>
          <p>1. Create an account on our application portal.</p>
          <p>2. Fill out your personal information and academic history.</p>
          <p>3. Browse through the list of universities and select your preferred choices.</p>
          <p>4. Submit the required documents for each university application.</p>
          <p>5. Pay the application fees.</p>
          <p>6. Submit your application and wait for the confirmation.</p>
        </section>
        
        <section className="help-section">
          <h2>Contact Us</h2>
          <p>If you have any questions or need further assistance, please contact our support team:</p>
          <p>Email: support@universityapp.com</p>
          <p>Phone: 1-800-UNI-HELP (1-800-864-4357)</p>
          <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
        </section>
        
        <section className="help-section">
          <h2>FAQs</h2>
          <p><strong>Q: How do I reset my password?</strong></p>
          <p>A: Click on the 'Forgot Password' link on the login page and follow the instructions.</p>
          <p><strong>Q: Can I apply to multiple universities at once?</strong></p>
          <p>A: Yes, you can apply to multiple universities through our application portal.</p>
          <p><strong>Q: What documents are required for the application?</strong></p>
          <p>A: Typically, you will need to submit your academic transcripts, letters of recommendation, and a personal statement. Check the specific requirements for each university.</p>
        </section>
      </div>
    );
  };
  
  export default Help;