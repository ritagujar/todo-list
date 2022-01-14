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

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isPassword = (value) => value.length === 6;

const Register = () => {
  const {
    value: usernameValue,
    isValid: usernameIsValid,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEamil,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPassword);

  let formIsValid = false;

  if (usernameIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;
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
  };

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
          type="text"
          htmlFor=""
          placeholder="Enter Username"
          value={usernameValue}
          onChange={usernameChangeHandler}
          onBlur={usernameBlurHandler}
        />
        <TextField>Your email</TextField>
        <input
          type="email"
          htmlFor=""
          placeholder="Enter email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        ></input>

        <TextField>Your password</TextField>
        <input
          type="password"
          htmlFor=""
          placeholder="******"
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        ></input>
        <Button type="submit" onClick={formSubmitHandler}>
          Register
        </Button>
      </Card>
    </LoginContainer>
  );
};

export default Register;
