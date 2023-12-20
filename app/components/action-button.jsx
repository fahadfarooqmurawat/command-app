import styled from "styled-components";

export const ActionButton = ({ label, buttonType, clickHandler }) => {
  return (
    <Container buttonType={buttonType} onClick={clickHandler}>
      {label}
    </Container>
  );
};

const Container = styled.button`
  margin: 10px;
  padding: 10px 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
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
  color: var(--secondary-text);
  border: none;
  outline: inherit;
  border-radius: 10px;

  font: inherit;

  cursor: pointer;

  transition: transform 0.1s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: #19216c;
    color: var(--primary-text);
  }
`;
