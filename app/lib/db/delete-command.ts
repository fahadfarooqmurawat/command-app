import dbService from "../../services/db.service";

export const deleteCommand = async ({
  command_id,
  fk_user_id,
}: {
  command_id: number;
  fk_user_id: number;
}) => {
  return await dbService.query(
    "DELETE FROM commands WHERE command_id = ? AND fk_user_id = ?;",
    [command_id, fk_user_id]
  );
};
