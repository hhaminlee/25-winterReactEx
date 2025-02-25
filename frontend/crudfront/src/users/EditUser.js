import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export default function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Edit User</Title>
        <Form onSubmit={onSubmit}>
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={onInputChange}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="text"
              placeholder="Enter your e-mail address"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </InputGroup>

          <ButtonGroup>
            <Button type="submit">Submit</Button>
            <CancelButton to="/">Cancel</CancelButton>
          </ButtonGroup>
        </Form>
      </FormWrapper>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 40px auto;
  height: 100vh;
`;

const FormWrapper = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #555;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Button = styled.button`
  flex: 1;
  margin-right: 5px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Link)`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  background-color: #dc3545;
  color: white;
  text-decoration: none;
  display: inline-block;
  &:hover {
    background-color: #c82333;
  }
`;
