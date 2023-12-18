"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { deleteCommand } from "../db/delete-command";

export const removeCommand = async ({ command_id }: { command_id: number }) => {
  const fk_user_id = 1;

  await deleteCommand({ command_id, fk_user_id });

  revalidatePath("/home");
  redirect("/home");
};
