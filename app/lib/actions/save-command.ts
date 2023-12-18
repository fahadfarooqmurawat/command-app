"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Command } from "@/app/@types/command.type";
import { updateCommand } from "../db/update-command";
import { createCommand } from "../db/create-command";

export const saveCommand = async ({
  command_id,
  command,
  description,
}: Omit<Command, "command_id"> & { command_id?: number }) => {
  const fk_user_id = 1;

  if (command_id) {
    await updateCommand({ command_id, command, description, fk_user_id });
  } else {
    await createCommand({ command, description, fk_user_id });
  }

  revalidatePath("/home");
  redirect("/home");
};
