import { Command } from "./command.type";

export type NewCommand = Omit<Command, "id">;
