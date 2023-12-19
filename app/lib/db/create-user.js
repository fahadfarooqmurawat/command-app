import dbService from "../../services/db.service";

export const createUser = async ({ user_name, user_email }) => {
  const result = await dbService.query("INSERT INTO users SET ?;", {
    user_name,
    user_email,
  });

  return {
    user_id: result.insertId,
    user_name,
    user_email,
  };
};
