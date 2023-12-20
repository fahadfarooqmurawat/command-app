"use server";

import { getServerSession } from "next-auth/next";

import { authOptions } from "@/app/api/auth/[...nextauth]/options.js";

import { readCommand } from "../db/read-command";

export const getAllCommands = async () => {
  const fk_user_id = (await getServerSession(authOptions))?.user?.user_id;

  if (!fk_user_id) {
    throw new Error("Session not active");
  }

  return await readCommand({ fk_user_id });
};
