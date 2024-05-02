import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";

const FirstLoginPage = ({ email }) => {
  const location = useLocation();
  const passedEmail = location.state?.email || email;
  const [code, setCode] = useState("");
  const [data, setData] = useState(null); // Updated to handle potential errors
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const requestBody = JSON.stringify({ email: passedEmail, code }); // Create JSON request body with both email and code

    try {
      const response = await fetch(
        "http://localhost:5000/auth/login-verification",
        {
          method: "POST", // Use POST for sending credentials
          headers: { "Content-Type": "application/json" },
          body: requestBody,
        }
      );

      if (!response.ok) {
        // Check for specific error status code (e.g., 401 for unauthorized)
        if (response.status === 401) {
          setError("Wrong verification code. Please try again.");
        } else {
          throw new Error(`API request failed with status ${response.status}`);
        }
      } else {
        const responseData = await response.json();
        setData(responseData);
        console.log(responseData);
        navigate("/dashboard"); // Example navigation
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again."); // Generic error message
    }
  };

  return (
    <div>
      <h2>Verify Email</h2>
      <p>Email: {passedEmail}</p> {/* Display the email */}
      <Form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {/* Display error message */}
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Verification Code
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit Code</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FirstLoginPage;
