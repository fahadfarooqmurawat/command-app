import { Command } from "../../@types/command.type";
import dbService from "../../services/db.service";

export const createCommand = async ({
  command,
  description,
  fk_user_id,
}: Omit<Command, "command_id"> & { fk_user_id: number }) => {
  return await dbService.query("INSERT INTO commands SET ?;", {
    command,
    description,
    fk_user_id,
  });
};
