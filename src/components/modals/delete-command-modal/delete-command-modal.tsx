import { useEffect } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { ActionButton } from "../../buttons/action-button/action-button";
import { VerticalSpacer } from "../../vertical-spacer/vertical-spacer";

type Props = {
  commandId: number;
  isOpen: boolean;
  closeModal: () => void;
  deleteCommand: (commandId: number) => void;
};

export const DeleteCommandModal = ({
  commandId,
  isOpen,
  closeModal,
  deleteCommand,
}: Props) => {
  const onRequestClose = () => {
    closeModal();
  };

  useEffect(() => {
    const enterHandler = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Enter") {
        e.preventDefault();
        closeModal();
      }
    };

    document.addEventListener("keydown", enterHandler);

    return () => document.removeEventListener("keydown", enterHandler);
  }, [closeModal, isOpen]);

  return (
    <ReactModal
      closeTimeoutMS={100}
      contentLabel={"Update Command Modal"}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      role={"dialog"}
      shouldFocusAfterRender={true}
      style={{
        overlay: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: { inset: "unset" },
      }}
    >
      <Title>Are you sure?</Title>
      <VerticalSpacer space={"20px"} />
      <ActionButtonsContainer>
        <ActionButton
          label={"Cancel"}
          buttonType={"secondary"}
          clickHandler={closeModal}
        />
        <ActionButton
          label={"Delete"}
          buttonType={"primary"}
          clickHandler={() => deleteCommand(commandId)}
        />
      </ActionButtonsContainer>
    </ReactModal>
  );
};

const Title = styled.h2``;

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
