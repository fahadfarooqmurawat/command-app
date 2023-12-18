import { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { Command } from "../../@types/command.type";
import { appStore } from "@/app/stores/app.store";

export const EditModal = () => {
  const [isOpen, selectedCommand] = appStore((state) => [
    state.editModal,
    state.selectedCommand,
  ]);
  const closeModal = appStore.getState().hideEditModal;

  const [updatedCommand, setUpdatedCommand] = useState<Command>(command);

  const commandTextBoxRef = useRef<HTMLInputElement>(null);

  const onAfterOpen = () => {
    commandTextBoxRef.current?.focus();
  };

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
      onAfterOpen={onAfterOpen}
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
      <Title>Update Command</Title>
      <CommandFormElements
        command={updatedCommand}
        setCommand={setUpdatedCommand}
        ref={commandTextBoxRef}
      />
      <ActionButtonsContainer>
        <ActionButton
          label={"Cancel"}
          buttonType={"secondary"}
          clickHandler={closeModal}
        />
        <ActionButton
          label={"Save"}
          buttonType={"primary"}
          clickHandler={() => updateCommand(updatedCommand)}
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
