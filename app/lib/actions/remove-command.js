"use server";

import { getServerSession } from "next-auth/next";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/api/auth/[...nextauth]/options.js";

import { deleteCommand } from "../db/delete-command";

export const removeCommand = async ({ command_id }) => {
  const fk_user_id = (await getServerSession(authOptions))?.user?.user_id;

  if (!fk_user_id) {
    console.log("Session not active");
    // throw new Error("Session not active");
  }

  await deleteCommand({ command_id, fk_user_id });

  revalidatePath("/home");
  redirect("/home");
};
