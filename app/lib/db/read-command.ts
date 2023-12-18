import { Command } from "../../@types/command.type";
import dbService from "../../services/db.service";

export const readCommand = async ({
  fk_user_id,
}: {
  fk_user_id: number;
}): Promise<Command[]> => {
  const allCommands = (await dbService.query(
    "SELECT command_id, command, description FROM commands WHERE fk_user_id = ?;",
    [fk_user_id]
  )) as Command[];

  return allCommands.map((command) => ({ ...command }));
};
