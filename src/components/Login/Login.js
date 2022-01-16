import React from "react";
import {
  LoginContainer,
  StyleText,
  Text,
  Card,
  TextField,
  Button,
  LoginLink,
} from "./styles";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/use-input";

const isEmail = (value) => value.includes("@");
const isPassword = (value) => value.length >= 6;

const Login = () => {
  const navigate = useNavigate();
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEamil,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPassword);

  let formIsValid = false;

  let email = localStorage.getItem("email");
  let password = localStorage.getItem("password");

  if (
    emailIsValid &&
    passwordIsValid &&
    email === emailValue &&
    password === passwordValue
  ) {
    formIsValid = true;
    localStorage.setItem("status", true);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      alert("invalid login");
      return;
    }

    console.log("submited");
    resetEamil();
    resetPassword();

    navigate(`/register`);
  };

  let emailClasses = emailHasError ? "form-control invalid" : "form-control";
  let passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <LoginContainer>
      <StyleText>Login</StyleText>
      <Text>
        Don't have an account? <LoginLink to="/register">Register</LoginLink>
        now.
      </Text>
      <Card>
        <TextField>Your email</TextField>
        <input
          type="email"
          htmlFor=""
          placeholder="Enter email"
          className={emailClasses}
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Please enter email</p>}
        <TextField>Your password</TextField>
        <input
          type="password"
          htmlFor=""
          placeholder="******"
          className={passwordClasses}
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        {passwordHasError && (
          <p className="error-text">
            {" "}
            Please enter password greater than 6 digits.
          </p>
        )}
        <LoginLink
          style={{
            display: "flex",
            justifyContent: "flex-end",
            // marginTop: "10px",
            fontSize: "1.1rem",
          }}
          to="/"
        >
          Forgot password?
        </LoginLink>
        <Button type="submit" onClick={formSubmitHandler}>
          Sign up
        </Button>
      </Card>
    </LoginContainer>
  );
};

export default Login;
