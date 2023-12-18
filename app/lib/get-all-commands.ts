import { Command } from "../@types/command.type";
import dbService from "../services/db.service";

export const getAllCommands = async () => {
  const allCommands = (await dbService.query(
    "SELECT * FROM commands;",
    []
  )) as Command[];

  console.log("HERE");
  console.log(allCommands);

  return allCommands.map((command) => ({ ...command }));
};
