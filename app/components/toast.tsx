import React, { useEffect } from "react";
import styled from "styled-components";

export const Toast = ({
  message,
  position,
  duration,
  onClose,
}: {
  message: string;
  position: { x: number; y: number };
  duration: number;
  onClose: () => void;
}) => {
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
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
`;
