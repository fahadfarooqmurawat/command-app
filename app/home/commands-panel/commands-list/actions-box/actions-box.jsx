import { DeleteIcon, EditIcon } from "@/app/components/icons";
import { appStore } from "@/app/stores/app.store";

export const ActionsBox = ({ command }) => {
  const editButtonClicked = (e) => {
    e.preventDefault();
    e.stopPropagation();
    appStore.setState({ selectedCommand: command });
    appStore.getState().showEditModal();
  };

  const deleteButtonClicked = (e) => {
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
