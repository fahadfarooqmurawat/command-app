import styled from "styled-components";

export const TextBox = styled.input`
  height: 30px;
  padding: 10px;

  color: var(--secondary-text);
  border: none;
  outline: none;
  outline: 2px solid var(--primary-foreground);
  border-radius: 8px;

  font-size: 16px;

  &:focus {
    outline: 3px solid var(--primary-foreground);
  }
`;
