import React, { useEffect } from "react";
import styled from "styled-components";

export const Toast = ({ message, position, duration, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <Container style={{ top: position.y, left: position.x }}>
      <p>{message}</p>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  transform: translateX(-50%);
  background-color: var(--primary-background);
  color: var(--secondary-text);
  padding: 10px;
  border-radius: 5px;
`;