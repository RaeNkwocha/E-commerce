import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./Authcontext";
import Alert from "@material-ui/lab/Alert";

import fruit from "../components/Products/shopImage/Group.png";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("password does not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/shop");
    } catch {
      setError("failed to create an Account");
    }
    setLoading(false);
  }
  return (
    <>
      <div
        style={{
          height: "150px",
          background: "#FCFCFC99 ",
          // marginBottom: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "center",
            paddingTop: "10vh",
          }}
        >
          <img src={fruit} alt=""></img>
        </div>
      </div>

      <h2 style={{ marginLeft: "30px" }}> Sign up</h2>
      {error && <Alert severity="error"> {error} </Alert>}
      <h6
        style={{
          fontSize: "10px",
          marginLeft: "30px",
          color: "#7C7C7C",
          lineHeight: "15px",
          letterSpacing: "0.7px",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        Enter your credentials to continue
      </h6>
      <div style={{ marginLeft: "30px" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group id="e-mail">
            <Form.Control
              style={{ width: "80vw", padding: "12px", marginLeft: "0px" }}
              type="e-mail"
              ref={emailRef}
              required
            />
          </Form.Group>
          <Form.Group id="Password">
            <Form.Control
              style={{
                width: "80vw",
                marginTop: "30px",
                padding: "12px",
                marginLeft: "0px",
              }}
              type="password"
              ref={passwordRef}
              required
            />
          </Form.Group>

          <Form.Group id="Password-confirmed">
            <Form.Control
              style={{
                width: "80vw",
                marginTop: "30px",
                padding: "12px",
                marginLeft: "0px",
              }}
              type="password"
              ref={passwordConfirmationRef}
              required
            />
          </Form.Group>

          <div>
            <div
              style={{
                fontSize: "0.5rem",
                width: "100%",
                marginRight: "30px",
                marginTop: "10px",
              }}
            >
              By continuing you agree to our{" "}
              <span
                style={{
                  color: "green",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                }}
              >
                Terms of Service{" "}
              </span>
              and{" "}
              <span
                style={{
                  color: "green",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                }}
              >
                Privacy Privacy
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <button
              disabled={loading}
              style={{
                background: "#53B175",
                border: "none",
                padding: "15px",
                width: "250px",
                marginRight: "30px",
                borderRadius: "15px",
                marginTop: "20px",
                color: "white",
                fontSize: "20px",
              }}
            >
              Sign up
            </button>
          </div>
        </Form>
      </div>

      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <strong> Already Have an account?</strong>
        <Link to="/login">Log in</Link>
      </div>
    </>
  );
}

export default Signup;
