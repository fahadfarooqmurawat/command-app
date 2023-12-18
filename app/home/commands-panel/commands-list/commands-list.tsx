import styled from "styled-components";
import { Command } from "@/app/@types/command.type";
import { ActionsBox } from "./actions-box/actions-box";

export const CommandsList = ({
  commands,
  onElementClicked,
}: {
  commands: Command[];
  onElementClicked: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    command: string
  ) => void;
}) => {
  return (
    <List>
      {commands.map((command) => (
        <Element
          key={command.id}
          onClick={(e) => onElementClicked(e, command.command)}
        >
          <CommandTitle>{command.command}</CommandTitle>
          <CommandDescription>{command.description}</CommandDescription>
          <ActionsBoxContainer>
            <ActionsBox />
          </ActionsBoxContainer>
        </Element>
      ))}
    </List>
  );
};

const List = styled.div`
  margin-top: 20px;
  width: 100%;
  max-height: 94%;
  text-align: left;
  background: red;
  overflow-y: scroll;
`;

const Element = styled.div`
  background-color: #65d6ad;
  color: #102a43;
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  cursor: pointer;
`;
const CommandTitle = styled.span`
  flex: 1;
`;
const CommandDescription = styled.span`
  flex: 2;
`;
const ActionsBoxContainer = styled.span`
  flex: 1;
`;
