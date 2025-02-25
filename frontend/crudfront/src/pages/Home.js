import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <Container>
      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>S.N</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Username</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Action</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {users.map((user, index) => (
              <TableRow key={user.id}>
                <TableData>{index + 1}</TableData>
                <TableData>{user.name}</TableData>
                <TableData>{user.username}</TableData>
                <TableData>{user.email}</TableData>
                <TableData>
                  <ButtonGroup>
                    <StyledButton to={`/viewuser/${user.id}`}>
                      View
                    </StyledButton>
                    <StyledButton
                      to={`/edituser/${user.id}`}
                      variant="outline-primary"
                    >
                      Edit
                    </StyledButton>
                    <DeleteButton onClick={() => deleteUser(user.id)}>
                      Delete
                    </DeleteButton>
                  </ButtonGroup>
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
}
const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: white;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #007bff;
  color: white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
`;

const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  font-size: 16px;
`;

const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled(Link)`
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease-in-out;

  background-color: ${({ variant }) =>
    variant === "danger"
      ? "#dc3545"
      : variant === "outline-primary"
      ? "white"
      : "#007bff"};
  color: ${({ variant }) =>
    variant === "danger"
      ? "white"
      : variant === "outline-primary"
      ? "#007bff"
      : "white"};
  border: ${({ variant }) =>
    variant === "outline-primary" ? "2px solid #007bff" : "none"};

  &:hover {
    background-color: ${({ variant }) =>
      variant === "danger"
        ? "#c82333"
        : variant === "outline-primary"
        ? "#007bff"
        : "#0056b3"};
    color: white;
  }
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #c82333;
  }
`;
