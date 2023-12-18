import { DeleteIcon, EditIcon } from "@/app/components/icons";
import { appStore } from "@/app/stores/app.store";

export const ActionsBox = () => {
  const editButtonClicked = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    appStore.getState().showEditModal();
  };

  const deleteButtonClicked = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    appStore.getState().showDeleteModal();
  };

  return (
    <>
      <EditIcon onClick={editButtonClicked} />
      <DeleteIcon onClick={deleteButtonClicked} />
    </>
  );
};
