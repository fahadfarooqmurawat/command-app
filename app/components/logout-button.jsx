"use client";

import { signOut } from "next-auth/react";
import styled from "styled-components";

export const LogoutButton = () => {
  const handleClick = () => {
    signOut();
  };

  return <Button onClick={handleClick}>Logout</Button>;
};

const Button = styled.button`
  cursor: pointer;
  background-color: var(--primary-foreground);
  color: var(--primary-text);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.4px;
  padding: 6px;
  border-radius: 6px;
`;
