"use server";

import { Command } from "../../@types/command.type";
import { readCommand } from "../db/read-command";

export const getAllCommands = async (): Promise<Command[]> => {
  const fk_user_id = 1;

  return await readCommand({ fk_user_id });
};
