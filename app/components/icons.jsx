import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import styled, { css } from "styled-components";

const IconStyle = css`
  height: 30px;
  width: 30px;
  margin: 4px;
  padding: 2px;

  background-color: var(--primary-foreground);
  color: var(--primary-text);
  border-radius: 4px;

  cursor: pointer;

  transition: transform 0.1s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: var(--primary-background);
    color: var(--primary-foreground);
  }
`;

export const PlusIcon = styled(AiOutlinePlus)`
  ${IconStyle}
`;

export const EditIcon = styled(AiOutlineEdit)`
  ${IconStyle}
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  ${IconStyle}
`;
