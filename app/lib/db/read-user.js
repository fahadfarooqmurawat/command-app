import dbService from "../../services/db.service";

export const readUser = async ({ user_email }) => {
  const results = await dbService.query(
    "SELECT user_id, user_email, user_name FROM users WHERE user_email = ?;",
    [user_email]
  );

  if (results.length === 1) {
    const user = results[0];

    const { user_id, user_email, user_name } = user;

    return { user_id, user_email, user_name };
  }

  return null;
};
