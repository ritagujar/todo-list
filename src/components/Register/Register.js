import React from "react";
import {
  LoginContainer,
  StyleText,
  Text,
  Card,
  TextField,
  Button,
  LoginLink,
} from "../Login/styles";
import useInput from "../hooks/use-input";
import { useNavigate } from "react-router-dom";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isPassword = (value) => value.length === 6;

const Register = () => {
  const navigate = useNavigate();
  const {
    value: usernameValue,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = useInput(isNotEmpty);

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

  if (usernameIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;

    localStorage.setItem("username", usernameValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("password", passwordValue);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("submited");
    resetUsername();
    resetEamil();
    resetPassword();

    navigate(`/`);
  };

  let usernameClasses = usernameHasError
    ? "form-control invalid"
    : "form-control";
  let emailClasses = emailHasError ? "form-control invalid" : "form-control";
  let passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <LoginContainer>
      <StyleText>Register</StyleText>
      <Text>
        Already Register? <LoginLink to="/">Login</LoginLink>
        now.
      </Text>
      <Card>
        <TextField>Your username</TextField>
        <input
          className={usernameClasses}
          type="text"
          htmlFor=""
          placeholder="Enter Username"
          value={usernameValue}
          onChange={usernameChangeHandler}
          onBlur={usernameBlurHandler}
        />
        {usernameHasError && (
          <p className="error-text">Please enter username.</p>
        )}

        <TextField>Your email</TextField>
        <input
          className={emailClasses}
          type="email"
          htmlFor=""
          placeholder="Enter email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Please enter email</p>}

        <TextField>Your password</TextField>
        <input
          className={passwordClasses}
          type="password"
          htmlFor=""
          placeholder="Enter password"
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        {passwordHasError && (
          <p className="error-text">
            Please enter password greater than 6 digits.
          </p>
        )}
        <Button type="submit" onClick={formSubmitHandler}>
          Register
        </Button>
      </Card>
    </LoginContainer>
  );
};

export default Register;
