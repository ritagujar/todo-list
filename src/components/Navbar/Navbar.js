import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 3rem;
`;
const LogoText = styled(Link)`
  color: #242455;
  font-weight: 800;
  font-style: italic;
  text-decoration: none;
  font-size: 1.4rem;
  border-bottom: 1px dashed #242455;
`;
const Button = styled.button`
  border: none;
  font-weight: 800;
  border: none;
  width: 6.5rem;
  height: 2.5rem;
  border-radius: 8rem;
  font-size: 1rem;
  font-style: italic;
  color: #242455;
  cursor: pointer;
  background-color: #fff;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <LogoText to="/">My Todo List</LogoText>
      <Button>Login Now</Button>
    </NavContainer>
  );
};

export default Navbar;
