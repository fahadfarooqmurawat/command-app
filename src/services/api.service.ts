import { Command } from "../@types/command.type";
import { NewCommand } from "../@types/new-command.type";

const commands: Command[] = [
  {
    id: "1",
    command: "npx create-react-app 1",
    description: "create react app",
  },
  {
    id: "2",
    command: "npx create-react-app 2",
    description: "create react app",
  },
  {
    id: "3",
    command: "npx create-react-app 3",
    description: "create react app",
  },
  {
    id: "4",
    command: "npx create-react-app 4",
    description: "create react app",
  },
  {
    id: "5",
    command: "git status",
    description: "check git status",
  },
  {
    id: "6",
    command: "npx create-react-app 1",
    description: "create react app",
  },
  {
    id: "7",
    command: "npx create-react-app 2",
    description: "create react app",
  },
  {
    id: "8",
    command: "npx create-react-app 3",
    description: "create react app",
  },
  {
    id: "9",
    command: "npx create-react-app 4",
    description: "create react app",
  },
  {
    id: "10",
    command: "git status",
    description: "check git status",
  },
];

const getCommands = ({ userId }: { userId: string }) => {
  return commands;
};

const addCommand = ({
  userId,
  newCommand,
}: {
  userId: string;
  newCommand: NewCommand;
}) => {
  const newCommandId = (
    parseInt(commands[commands.length - 1].id) + 1
  ).toString();
  commands.push({ id: newCommandId, ...newCommand });

  return commands;
};

const updateCommand = ({
  userId,
  updatedCommand,
}: {
  userId: string;
  updatedCommand: Command;
}) => {
  const index = commands.findIndex((value) => {
    return value.id === updatedCommand.id;
  });

  commands.splice(index, 1, updatedCommand);

  return commands;
};

const deleteCommand = ({
  userId,
  commandId,
}: {
  userId: string;
  commandId: string;
}) => {
  const index = commands.findIndex((value) => {
    return value.id === commandId;
  });

  commands.splice(index, 1);

  return commands;
};

export const apiService = {
  getCommands,
  addCommand,
  updateCommand,
  deleteCommand,
};
