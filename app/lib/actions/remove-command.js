"use server";

import { revalidatePath } from "next/cache.js";
import { makeApiRouteCall } from "../make-api-route-call.js";

export const removeCommand = async ({ command_id }) => {
  await makeApiRouteCall("DELETE", {
    command_id
  });

  revalidatePath("http://localhost:3000/api/commands");
};
