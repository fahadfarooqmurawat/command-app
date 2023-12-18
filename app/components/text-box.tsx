import styled from "styled-components";

export const TextBox = styled.input`
  border: none;

  height: 30px;
  width: 400px;
  padding: 10px;

  border-radius: 8px;

  font-size: 16px;

  border: 2px solid #27ab83;
  color: #102a43;

  &:focus {
    outline: 2px solid #27ab83;
  }
`;
