import styled from "styled-components";

import { ActionsBox } from "./actions-box/actions-box";

export const CommandsList = ({ commands, onElementClicked }) => {
  return (
    <List>
      {commands.map((command) => (
        <Element
          key={command.command_id}
          onClick={(e) => onElementClicked(e, command.command)}
        >
          <CommandTitle>{command.command}</CommandTitle>
          <CommandDescription>{command.description}</CommandDescription>
          <ActionsBoxContainer>
            <ActionsBox command={command} />
          </ActionsBoxContainer>
        </Element>
      ))}
    </List>
  );
};

const List = styled.div`
  max-height: 94%;
  width: 100%;
  margin-top: 20px;
  padding-right: 10px;

  text-align: left;

  overflow-y: scroll;
`;

const Element = styled.div`
  margin: 10px 0;
  padding: 10px;

  display: flex;
  flex-flow: row wrap;
  align-items: center;

  background-color: var(--secondary-background);
  color: var(--secondary-text);
  border-radius: 4px;

  cursor: pointer;
`;

const CommandTitle = styled.span`
  flex: 1;
  user-select: none;
`;

const CommandDescription = styled.span`
  flex: 2;
  user-select: none;
`;

const ActionsBoxContainer = styled.span``;

