import { Command } from "../../@types/command.type";
import dbService from "../../services/db.service";

export const updateCommand = async ({
  command_id,
  command,
  description,
  fk_user_id,
}: Command & { fk_user_id: number }) => {
  return await dbService.query(
    "UPDATE commands SET ? WHERE command_id = ?",
    [
      {
        command,
        description,
        fk_user_id,
      },
      command_id,
    ]
  );
};
