"use server";

import { revalidatePath } from "next/cache.js";
import { makeApiRouteCall } from "../make-api-route-call.js";

export const saveCommand = async ({ command_id, command, description }) => {
  if (command_id) {
    await makeApiRouteCall("PUT", {
      command_id, command, description,
    });
  } else {
    await makeApiRouteCall("POST", {
      command, description,
    });
  }

  revalidatePath("http://localhost:3000/api/commands");
};
