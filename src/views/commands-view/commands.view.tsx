import { useEffect, useMemo, useRef, useState } from "react";

import { Command } from "../../@types/command.type";
import { NewCommand } from "../../@types/new-command.type";
import { apiService } from "../../services/api.service";
import { CommandsViewDesktop } from "./ui/commands.view.desktop";

const userId = "userId";

export const CommandsView = () => {
  const [allCommands, setAllCommands] = useState<Command[] | null>(null);

  const [commandToEdit, setCommandToEdit] = useState<Command | null>(null);
  const [commandToDelete, setCommandToDelete] = useState<Command | null>(null);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [searchText, setSearchText] = useState("");

  const searchBoxRef = useRef<HTMLInputElement>(null);

  const filteredCommands = useMemo(() => {
    if (!allCommands) return [];

    if (searchText.trim() === "") return allCommands;

    const searchWords = searchText.trim().split(" ");

    return allCommands.filter((command) =>
      searchWords.every(
        (word) =>
          command.command.includes(word) || command.description.includes(word)
      )
    );
  }, [searchText, allCommands]);

  const getAllCommands = async () => {
    const result = await apiService.getCommands({ userId });

    setAllCommands(result);
  };

  const editCommand = (command: Command) => {
    console.log("OPEN MODAL");
    console.log(command);
    setCommandToEdit(command);
    setIsEditModalOpen(true);
  };

  const deleteCommand = (command: Command) => {
    setCommandToDelete(command);
    setIsDeleteModalOpen(true);
  };

  const saveCommand = async (newCommand: NewCommand) => {
    const result = await apiService.addCommand({ userId, newCommand });

    setIsAddModalOpen(false);
    setAllCommands(result);
  };

  const updateCommand = async (updatedCommand: Command) => {
    console.log("TEST");
    console.log(updatedCommand);
    const result = await apiService.updateCommand({ userId, updatedCommand });

    setIsEditModalOpen(false);
    setAllCommands(result);
  };

  const deleteCommandConfirm = async (commandId: number) => {
    const result = await apiService.deleteCommand({ userId, commandId });

    setIsDeleteModalOpen(false);
    setAllCommands(result);
  };

  useEffect(() => {
    const ctrlFOverride = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "f" && searchBoxRef.current !== null) {
        e.preventDefault();
        searchBoxRef.current.focus();
      }
    };

    document.addEventListener("keydown", ctrlFOverride);

    return () => document.removeEventListener("keydown", ctrlFOverride);
  }, []);

  useEffect(() => {
    if (!allCommands) {
      getAllCommands();
    }
  }, []);

  return (
    <CommandsViewDesktop
      commandToDelete={commandToDelete}
      commandToEdit={commandToEdit}
      deleteCommand={deleteCommand}
      deleteCommandConfirm={deleteCommandConfirm}
      editCommand={editCommand}
      filteredCommands={filteredCommands}
      isAddModalOpen={isAddModalOpen}
      isDeleteModalOpen={isDeleteModalOpen}
      isEditModalOpen={isEditModalOpen}
      saveCommand={saveCommand}
      searchBoxRef={searchBoxRef}
      searchText={searchText}
      setCommandToEdit={setCommandToEdit}
      setIsAddModalOpen={setIsAddModalOpen}
      setIsDeleteModalOpen={setIsDeleteModalOpen}
      setIsEditModalOpen={setIsEditModalOpen}
      setSearchText={setSearchText}
      updateCommand={updateCommand}
    />
  );
};
