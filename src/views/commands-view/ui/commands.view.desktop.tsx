import styled from "styled-components";
import { Command } from "../../../@types/command.type";
import { AddCommandButton } from "../../../components/buttons/add-command-button/add-command-button";
import { CommandList } from "../../../components/command-list/command-list";
import { AddCommandModal } from "../../../components/modals/add-command-modal/add-command-modal";
import { DeleteCommandModal } from "../../../components/modals/delete-command-modal/delete-command-modal";
import { UpdateCommandModal } from "../../../components/modals/update-command-modal/update-command-modal";
import { SearchBox } from "../../../components/search-box/search-box";
import { UiProps } from "../@types/ui.props";

export const CommandsViewDesktop = ({
  commandToDelete,
  commandToEdit,
  deleteCommand,
  deleteCommandConfirm,
  editCommand,
  filteredCommands,
  isAddModalOpen,
  isDeleteModalOpen,
  isEditModalOpen,
  saveCommand,
  searchBoxRef,
  searchText,
  setCommandToEdit,
  setIsAddModalOpen,
  setIsDeleteModalOpen,
  setIsEditModalOpen,
  setSearchText,
  updateCommand,
}: UiProps) => {
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
