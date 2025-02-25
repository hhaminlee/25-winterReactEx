import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <Container>
      <Card>
        <CardHeader>Details of user ID: {id}</CardHeader>
        <List>
          <ListItem>
            <strong>Name:</strong> {user.name}
          </ListItem>
          <ListItem>
            <strong>Username:</strong> {user.username}
          </ListItem>
          <ListItem>
            <strong>Email:</strong> {user.email}
          </ListItem>
        </List>
        <BackButton to="/">Back to Home</BackButton>
      </Card>
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

const Card = styled.div`
  width: 400px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

const CardHeader = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  text-align: left;
  strong {
    font-weight: bold;
    color: #007bff;
  }
`;

const BackButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #0056b3;
  }
`;
