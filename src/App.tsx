import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { Command } from "./@types/command.type";
import { AddCommandButton } from "./components/buttons/add-command-button/add-command-button";
import { AddCommandModal } from "./components/modals/add-command-modal/add-command-modal";
import { CommandList } from "./components/command-list/command-list";
import { SearchBox } from "./components/search-box/search-box";
import { apiService } from "./services/api.service";
import { UpdateCommandModal } from "./components/modals/update-command-modal/update-command-modal";
import { NewCommand } from "./@types/new-command.type";
import { DeleteCommandModal } from "./components/modals/delete-command-modal/delete-command-modal";

const userId = "userId";
export const App = () => {
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
    <Container>
      <Header>
        <SearchBoxWrapper>
          <SearchBox
            searchText={searchText}
            setSearchText={setSearchText}
            ref={searchBoxRef}
          />
        </SearchBoxWrapper>
        <AddCommandButtonWrapper>
          <AddCommandButton clickHandler={() => setIsAddModalOpen(true)} />
        </AddCommandButtonWrapper>
      </Header>
      <CommandListWrapper>
        <CommandList
          commands={filteredCommands}
          editCommand={editCommand}
          deleteCommand={deleteCommand}
        />
      </CommandListWrapper>
      <AddCommandModal
        closeModal={() => setIsAddModalOpen(false)}
        isOpen={isAddModalOpen}
        saveCommand={saveCommand}
      />
      {commandToEdit && (
        <UpdateCommandModal
          command={commandToEdit}
          closeModal={() => {
            setIsEditModalOpen(false);
            setCommandToEdit(null);
          }}
          isOpen={isEditModalOpen}
          updateCommand={(updatedCommand: Command) => {
            updateCommand(updatedCommand);
            setCommandToEdit(null);
          }}
        />
      )}
      {commandToDelete && (
        <DeleteCommandModal
          commandId={commandToDelete.id}
          closeModal={() => setIsDeleteModalOpen(false)}
          isOpen={isDeleteModalOpen}
          deleteCommand={deleteCommandConfirm}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: lime;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 12px;
`;

const SearchBoxWrapper = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const AddCommandButtonWrapper = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CommandListWrapper = styled.div`
  flex: 1;

  padding: 4px;

  overflow-y: scroll;
`;
