import styled from "styled-components";
import { Command } from "../../@types/command.type";
import { CommandItem } from "../command-item/command-item";

type Props = {
  commands: Command[];
  editCommand: (command: Command) => void;
  deleteCommand: (command: Command) => void;
};

export const CommandList = ({
  commands,
  editCommand,
  deleteCommand,
}: Props) => {
  return (
    <Container>
      {commands.map((command) => {
        return (
          <CommandItem
            key={command.id}
            {...command}
            editCommand={() => editCommand(command)}
            deleteCommand={() => deleteCommand(command)}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div``;
