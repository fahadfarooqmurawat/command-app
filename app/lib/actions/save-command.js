"use server";

import { getServerSession } from "next-auth/next";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/api/auth/[...nextauth]/options.js";

import { updateCommand } from "../db/update-command";
import { createCommand } from "../db/create-command";

export const saveCommand = async ({ command_id, command, description }) => {
  const fk_user_id = (await getServerSession(authOptions))?.user?.user_id;

  if (!fk_user_id) {
    console.log("Session not active");
    // throw new Error("Session not active");
  }

  if (command_id) {
    await updateCommand({ command_id, command, description, fk_user_id });
  } else {
    await createCommand({ command, description, fk_user_id });
  }

  revalidatePath("/home");
  redirect("/home");
};
