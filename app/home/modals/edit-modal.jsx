"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

import { ActionButton } from "@/app/components/action-button";
import { TextBox } from "@/app/components/text-box";
import { appStore } from "@/app/stores/app.store";
import { makeApiRouteCallFromClient } from "@/app/lib/make-api-route-call-from-client.js";

export const EditModal = ({ revalidate }) => {
  const [isOpen, selectedCommand] = appStore((state) => [
    state.editModal,
    state.selectedCommand,
  ]);

  const {
    hideEditModal: closeModal,
    startProcessing,
    stopProcessing,
  } = appStore.getState();

  const [command, setCommand] = useState("");
  const [description, setDescription] = useState("");

  const commandTextBoxRef = useRef(null);

  const onCancelClicked = (e) => {
    e.preventDefault();
    closeModal();
  };

  const handleSaveCommand = useCallback(async () => {
    if (selectedCommand) {
      try {
        startProcessing();
        await makeApiRouteCallFromClient("PUT", {
          command_id: selectedCommand.command_id,
          command,
          description,
        });
        await revalidate();
        closeModal();
      } catch (error) {
        console.log("editModal");
        console.log(error);
      } finally {
        stopProcessing();
      }
    }
  }, [
    closeModal,
    command,
    description,
    revalidate,
    selectedCommand,
    startProcessing,
    stopProcessing,
  ]);

  const onUpdateClicked = async (e) => {
    e.preventDefault();

    await handleSaveCommand();
  };

  const onAfterClose = () => {
    setCommand("");
    setDescription("");
  };

  const onAfterOpen = () => {
    commandTextBoxRef.current?.focus();
  };

  const onRequestClose = () => {
    closeModal();
  };

  useEffect(() => {
    if (isOpen && selectedCommand) {
      setCommand(selectedCommand.command);
      setDescription(selectedCommand.description);
    }
  }, [isOpen, selectedCommand]);

  useEffect(() => {
    const enterHandler = (e) => {
      if (!isOpen) return;

      if (e.key === "Enter") {
        e.preventDefault();
        handleSaveCommand();
      }
    };

    document.addEventListener("keydown", enterHandler);

    return () => document.removeEventListener("keydown", enterHandler);
  }, [isOpen, command, description, handleSaveCommand]);

  return (
    <ReactModal
      closeTimeoutMS={100}
      contentLabel={"Edit Command Modal"}
      isOpen={isOpen}
      onAfterClose={onAfterClose}
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
      <Title>Edit Command</Title>
      <Form>
        <TextBox
          value={command}
          onChange={(e) => setCommand(e.currentTarget.value)}
          ref={commandTextBoxRef}
        />
        <TextBox
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
        <ActionButtonsContainer>
          <ActionButton
            label={"Cancel"}
            buttonType={"secondary"}
            clickHandler={onCancelClicked}
          />
          <ActionButton
            label={"Update"}
            buttonType={"primary"}
            clickHandler={onUpdateClicked}
          />
        </ActionButtonsContainer>
      </Form>
    </ReactModal>
  );
};

const Title = styled.h2`
  margin-bottom: 20px;
  color: var(--secondary-text);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
