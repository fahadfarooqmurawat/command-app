import { Command } from "./command.type";

export type NewCommand = Omit<Command, "command_id">;
