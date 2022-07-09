import styled from "styled-components";
import { AiOutlineCopy, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Command } from "../../@types/command.type";
import { LabelStyle } from "../../styles/label.style";
import { IconStyle } from "../../styles/icon.style";

type Props = Command & {
  editCommand: () => void;
  deleteCommand: () => void;
};

export const CommandItem = ({
  id,
  command,
  description,
  editCommand,
  deleteCommand,
}: Props) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
  };

  return (
    <Container>
      <CommandLabel>{command}</CommandLabel>
      <DescriptionLabel>{description}</DescriptionLabel>
      <ActionsContainer>
        <CopyIcon onClick={copyToClipboard} />
        <EditIcon onClick={editCommand} />
        <DeleteIcon onClick={deleteCommand} />
      </ActionsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;

  background-color: silver;

  margin: 4px;
  padding: 8px;

  border-radius: 12px;
  overflow: hidden;

  &:hover {
    transform: scaleY(1.1);
    transform: scaleX(1.01);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  transition: transform 0.1s;
`;

const CommandLabel = styled.p`
  flex: 1;

  ${LabelStyle}
`;

const DescriptionLabel = styled.p`
  flex: 1;

  ${LabelStyle}
`;

const ActionsContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CopyIcon = styled(AiOutlineCopy)`
  ${IconStyle}
`;

const EditIcon = styled(AiOutlineEdit)`
  ${IconStyle}
`;

const DeleteIcon = styled(AiOutlineDelete)`
  ${IconStyle}
`;
