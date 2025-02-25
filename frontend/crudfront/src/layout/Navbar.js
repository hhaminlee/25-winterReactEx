import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  padding: 15px 20px;
`;

export const Brand = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const Toggler = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Button = styled(Link)`
  background-color: white;
  color: #007bff;
  font-weight: bold;
  padding: 8px 15px;
  border-radius: 5px;
  text-decoration: none;
  border: 2px solid white;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;
export default function Navbar() {
  return (
    <NavbarContainer>
      <Brand as={Link} to="/">
        Full Stack Application
      </Brand>
      <Toggler aria-label="Toggle navigation">☰</Toggler>
      <Button as={Link} to="/adduser">
        Add User
      </Button>
    </NavbarContainer>
  );
}
