import { css } from "styled-components";

export const IconStyle = css`
  background-color: white;

  height: 30px;
  width: 30px;

  margin: 4px;
  padding: 2px;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: lime;
  }

  transition: transform 0.1s;
`;
