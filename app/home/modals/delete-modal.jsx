"use client";

import { useCallback, useEffect } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

import { ActionButton } from "@/app/components/action-button";
import { appStore } from "@/app/stores/app.store";
import { makeApiRouteCallFromClient } from "@/app/lib/make-api-route-call-from-client.js";

export const DeleteModal = ({ revalidate }) => {
  const [isOpen, selectedCommand] = appStore((state) => [
    state.deleteModal,
    state.selectedCommand,
  ]);

  const {
    hideDeleteModal: closeModal,
    startProcessing,
    stopProcessing,
  } = appStore.getState();

  const onRequestClose = () => {
    closeModal();
  };

  const onDeleteClicked = useCallback(async () => {
    if (selectedCommand) {
      try {
        startProcessing();
        await makeApiRouteCallFromClient("DELETE", {
          command_id: selectedCommand.command_id,
        });
        closeModal();
      } catch (error) {
        console.log("deleteModal");
        console.log(error);
      } finally {
        stopProcessing();
      }
    }
  }, [closeModal, selectedCommand, startProcessing, stopProcessing]);

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
