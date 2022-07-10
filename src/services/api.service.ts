import axios from "axios";
import { Command } from "../@types/command.type";
import { NewCommand } from "../@types/new-command.type";

const getCommands = async ({ userId }: { userId: string }): Promise<any> => {
  const result = await axios({
    method: "GET",
    url: "http://localhost:3030/command",
  });

  return result.data;
};

const addCommand = async ({
  userId,
  newCommand,
}: {
  userId: string;
  newCommand: NewCommand;
}) => {
  const result = await axios({
    method: "POST",
    url: "http://localhost:3030/command",
    data: { newCommand },
  });

  return result.data;
};

const updateCommand = async ({
  userId,
  updatedCommand,
}: {
  userId: string;
  updatedCommand: Command;
}) => {
  const result = await axios({
    method: "PATCH",
    url: "http://localhost:3030/command",
    data: { updatedCommand },
  });

  return result.data;
};

const deleteCommand = async ({
  userId,
  commandId,
}: {
  userId: string;
  commandId: number;
}) => {
  const result = await axios({
    method: "DELETE",
    url: "http://localhost:3030/command",
    data: { commandId },
  });

  return result.data;
};

export const apiService = {
  getCommands,
  addCommand,
  updateCommand,
  deleteCommand,
};
