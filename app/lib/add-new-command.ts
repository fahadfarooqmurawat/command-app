import { Command } from "../@types/command.type";
import dbService from "../services/db.service";

export const addNewCommand = async ({
  command,
  description,
}: Omit<Command, "id">) => {
  return await dbService.query("INSERT INTO commands SET ?", {
    command,
    description,
    fk_user_id: 1,
  });
};
