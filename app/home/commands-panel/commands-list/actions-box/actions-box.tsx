import { Command } from "@/app/@types/command.type";
import { DeleteIcon, EditIcon } from "@/app/components/icons";
import { appStore } from "@/app/stores/app.store";

export const ActionsBox = ({ command }: { command: Command }) => {
  const editButtonClicked = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    appStore.setState({ selectedCommand: command });
    appStore.getState().showEditModal();
  };

  const deleteButtonClicked = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    appStore.setState({ selectedCommand: command });
    appStore.getState().showDeleteModal();
  };

  return (
    <>
      <EditIcon onClick={editButtonClicked} />
      <DeleteIcon onClick={deleteButtonClicked} />
    </>
  );
};
