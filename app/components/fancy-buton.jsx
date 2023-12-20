import styled from "styled-components";

export const FancyButton = styled.button`
  padding: 8px;
  
  background-color: var(--primary-foreground);
  color: var(--primary-text);
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.4px;

  transition: transform 0.1s;

  &:hover {
    transform: scale(1.1);
  }
`;
