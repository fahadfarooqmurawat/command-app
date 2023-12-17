import { Command } from "../@types/command.type";
import dbService from "../services/db.service";

export const getAllCommands = async () => {
  const allCommands = (await dbService.query(
    "SELECT * FROM commands",
    []
  )) as Command[];

  return allCommands.map((command) => ({ ...command }));
};
