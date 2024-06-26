import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigateTo = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const requestBody = JSON.stringify({ email, password }); // Create JSON request body

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST", // Use POST for sending credentials
        headers: { "Content-Type": "application/json" },
        body: requestBody,
      });

      if (response.status === 201) {
        console.log(response.status);
        setSuccessMessage("Verification code sent. Please check your email. Redirecting to login page.....");

        setTimeout(() => {
          navigateTo("/login");
        }, 2000);
      } else {
        const responseData = await response.json();
        console.log("API Response:", responseData); // Print the response for debugging
        // Handle other statuses or error messages from the API
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };

  return (
    <div className="container-registration">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Row>
          <br />
          <p>
            Already have an account? 
            <a onClick={() => navigateTo("/login")} className="signInLabel">Sign In</a>
          </p>
          {successMessage && (
            <p style={{ color: "white" }}>{successMessage}</p>
          )}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
