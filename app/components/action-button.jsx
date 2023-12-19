import styled from "styled-components";

export const ActionButton = ({ label, buttonType, clickHandler }) => {
  return (
    <Container buttonType={buttonType} onClick={clickHandler}>
      {label}
    </Container>
  );
};

const Container = styled.button`
  background: none;
  color: var(--secondary-text);
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
        return "#E9B949";
      default:
        return "#7B93DB";
    }
  }};

  margin: 10px;
  padding: 10px 14px;

  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: #19216c;
    color: var(--primary-text);
  }

  transition: transform 0.1s;
`;
