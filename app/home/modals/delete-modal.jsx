"use client";

import { useCallback, useEffect } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { ActionButton } from "@/app/components/action-button";
import { removeCommand } from "@/app/lib/actions/remove-command";
import { appStore } from "@/app/stores/app.store";

export const DeleteModal = () => {
  const [isOpen, selectedCommand] = appStore((state) => [
    state.deleteModal,
    state.selectedCommand,
  ]);
  const closeModal = appStore.getState().hideDeleteModal;

  const onRequestClose = () => {
    closeModal();
  };

  const onDeleteClicked = useCallback(async () => {
    try {
      if (selectedCommand) {
        await removeCommand({ command_id: selectedCommand.command_id });
      }
      closeModal();
    } catch {}
  }, [closeModal, selectedCommand]);

  useEffect(() => {
    const enterHandler = (e) => {
      if (!isOpen) return;

      if (e.key === "Enter") {
        e.preventDefault();
        onDeleteClicked();
      }
    };

    document.addEventListener("keydown", enterHandler);

    return () => document.removeEventListener("keydown", enterHandler);
  }, [isOpen, onDeleteClicked, selectedCommand]);

  return (
    <ReactModal
      closeTimeoutMS={100}
      contentLabel={"Delete Command Modal"}
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
      <ActionButtonsContainer>
        <ActionButton
          label={"Cancel"}
          buttonType={"secondary"}
          clickHandler={closeModal}
        />
        <ActionButton
          label={"Delete"}
          buttonType={"primary"}
          clickHandler={onDeleteClicked}
        />
      </ActionButtonsContainer>
    </ReactModal>
  );
};

const Title = styled.h2`
  margin-bottom: 20px;
  color: var(--secondary-text);
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
