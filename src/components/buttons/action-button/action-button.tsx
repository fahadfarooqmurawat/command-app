import styled from "styled-components";
import { ButtonType } from "../../../@types/button-type.type";

type Props = {
  label: string;
  buttonType: ButtonType;
  clickHandler: () => void;
};

export const ActionButton = ({ label, buttonType, clickHandler }: Props) => {
  return (
    <Container buttonType={buttonType} onClick={clickHandler}>
      {label}
    </Container>
  );
};

const Container = styled.button<{ buttonType: ButtonType }>`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => {
    switch (props.buttonType) {
      case "secondary":
        return "lightgrey";
      case "warning":
        return "orange";
      default:
        return "lightgreen";
    }
  }};

  margin: 10px;
  padding: 10px 14px;

  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: lime;
  }

  transition: transform 0.1s;
`;
