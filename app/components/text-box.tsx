import styled from "styled-components";

export const TextBox = styled.input`
  border: none;

  height: 30px;
  padding: 10px;

  border-radius: 8px;

  font-size: 16px;

  border: 2px solid var(--primary-foreground);
  color: var(--secondary-text);

  &:focus {
    outline: 2px solid var(--primary-foreground);
  }
`;
