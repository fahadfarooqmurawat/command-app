import dbService from "../../services/db.service";

export const createCommand = async ({ command, description, fk_user_id }) => {
  return await dbService.query("INSERT INTO commands SET ?;", {
    command,
    description,
    fk_user_id,
  });
};
