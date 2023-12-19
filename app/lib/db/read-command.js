import dbService from "../../services/db.service";

export const readCommand = async ({ fk_user_id }) => {
  const allCommands = await dbService.query(
    "SELECT command_id, command, description FROM commands WHERE fk_user_id = ?;",
    [fk_user_id]
  );

  return allCommands.map((command) => ({ ...command }));
};
