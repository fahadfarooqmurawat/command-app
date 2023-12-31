import { NextResponse } from "next/server.js";
import { getServerSession } from "next-auth";
import { readCommand } from "@/app/lib/db/read-command.js";
import { createCommand } from "@/app/lib/db/create-command.js";
import { updateCommand } from "@/app/lib/db/update-command.js";
import { deleteCommand } from "@/app/lib/db/delete-command.js";
import { authOptions } from "../auth/[...nextauth]/options.js";

const getFkUserId = async () => {
  const fk_user_id = (await getServerSession(authOptions))?.user?.user_id;

  if (!fk_user_id) {
    throw new Error("Session not active");
  }

  return fk_user_id
}

export async function GET() {
  try {
    const fk_user_id = await getFkUserId();
    const commands = await readCommand({ fk_user_id });

    return NextResponse.json(commands);
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(request) {
  try {
    const fk_user_id = await getFkUserId();

    const { command, description } = await request.json();

    await createCommand({ command, description, fk_user_id });

    return NextResponse.json({ success: true });
  }
  catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function PUT(request) {
  try {
    const fk_user_id = await getFkUserId();
    const { command_id, command, description } = await request.json();

    await updateCommand({ command_id, command, description, fk_user_id });

    return NextResponse.json({ success: true });
  }
  catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function DELETE(request) {
  try {
    const fk_user_id = await getFkUserId();
    const { command_id } = await request.json();

    await deleteCommand({ command_id, fk_user_id });

    return NextResponse.json({ success: true });
  }
  catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}