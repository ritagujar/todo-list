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

const Register = () => {
  return (
    <LoginContainer>
      <StyleText>Register</StyleText>
      <Text>
        Already Register? <LoginLink to="/">Login</LoginLink>
        now.
      </Text>
      <Card>
        <TextField>Your username</TextField>
        <input type="text" htmlFor="" placeholder="Enter Username"></input>
        <TextField>Your email</TextField>
        <input type="text" htmlFor="" placeholder="Enter email"></input>

        <TextField>Your password</TextField>
        <input type="password" htmlFor="" placeholder="******"></input>
        <Button type="submit">Register</Button>
      </Card>
    </LoginContainer>
  );
};

export default Register;
