import dbService from "../../services/db.service";

export const updateCommand = async ({
  command_id,
  command,
  description,
  fk_user_id,
}) => {
  return await dbService.query("UPDATE commands SET ? WHERE command_id = ?", [
    {
      command,
      description,
      fk_user_id,
    },
    command_id,
  ]);
};
