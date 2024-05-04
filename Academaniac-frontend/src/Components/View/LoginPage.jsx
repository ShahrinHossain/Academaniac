import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./LoginPage.css";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const requestBody = JSON.stringify({ email, password }); // Create JSON request body

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST", // Use POST for sending credentials
        headers: { "Content-Type": "application/json" },
        body: requestBody,
      });
      console.log(response.status);

      if (response.status === 202) {
        // throw new Error(`API request failed with status ${response.status}`);
        navigateTo("/login/first", { state: { email } });
      } else if (response.status === 201) {
        // Handle successful signup (redirect to login)
        navigateTo("/dashboard");
      }
      //   } else {
      //     console.log("error");
      //     const responseData = await response.json();
      //     console.log("API Response:", responseData); // Print the response for debugging
      //   }
    } catch (error) {
      console.error("Error:", error);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };

  return (
    <div className="container-login">
      <div className="login-card">
        <h2>Sign In</h2>
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
          <br />
          {errorMessage && (
            <label style={{ color: "red" }}>{errorMessage}</label>
          )}
          <p>
            Don't have and account?
            <a onClick={() => navigateTo("/signup")}>Sign Up</a>
          </p>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
