"use server";

import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';
import { Command } from "@/app/@types/command.type";
import { addNewCommand } from "../add-new-command";

export const saveCommand = async ({
  command,
  description,
}: Omit<Command, "id">) => {
  await addNewCommand({ command, description });

  revalidatePath("/home");
  redirect('/home');
};
