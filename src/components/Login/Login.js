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

const Login = () => {
  return (
    <LoginContainer>
      <StyleText>Login</StyleText>
      <Text>
        Don't have an account? <LoginLink to="/register">Register</LoginLink>
        now.
      </Text>
      <Card>
        <TextField>Your email</TextField>
        <input type="email" htmlFor="" placeholder="Enter email"></input>

        <TextField>Your password</TextField>
        <input type="password" htmlFor="" placeholder="******"></input>

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
        <Button type="submit">Sign up</Button>
      </Card>
    </LoginContainer>
  );
};

export default Login;
