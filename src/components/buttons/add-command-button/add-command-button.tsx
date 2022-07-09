import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { IconStyle } from "../../../styles/icon.style";

type Props = { clickHandler: () => void };

export const AddCommandButton = ({ clickHandler }: Props) => {
  return (
    <Container>
      <IconPlus onClick={clickHandler} />
    </Container>
  );
};

const Container = styled.button`
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
`;

const IconPlus = styled(AiOutlinePlus)`
  ${IconStyle}
`;
