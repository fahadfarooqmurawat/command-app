"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

import { ActionButton } from "@/app/components/action-button";
import { TextBox } from "@/app/components/text-box";
import { saveCommand } from "@/app/lib/actions/save-command";
import { appStore } from "@/app/stores/app.store";

export const AddModal = () => {
  const isOpen = appStore((state) => state.addModal);
  const {
    hideAddModal: closeModal,
    startProcessing,
    stopProcessing,
  } = appStore.getState();

  const [command, setCommand] = useState("");
  const [description, setDescription] = useState("");

  const commandTextBoxRef = useRef(null);

  const clearCommand = () => {
    setCommand("");
    setDescription("");
    commandTextBoxRef.current?.focus();
  };

  const onCancelClicked = (e) => {
    e.preventDefault();
    closeModal();
  };

  const onClearClicked = (e) => {
    e.preventDefault();
    clearCommand();
  };

  const handleSaveCommand = useCallback(async () => {
    startProcessing();
    await saveCommand({ command, description });
    stopProcessing();
    closeModal();
  }, [closeModal, command, description, startProcessing, stopProcessing]);

  const onSaveClicked = async (e) => {
    e.preventDefault();
    try {
      await handleSaveCommand();
    } catch {}
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
    const enterHandler = async (e) => {
      if (!isOpen) return;

      if (e.key === "Enter") {
        e.preventDefault();
        await handleSaveCommand();
      }
    };

    document.addEventListener("keydown", enterHandler);

    return () => document.removeEventListener("keydown", enterHandler);
  }, [isOpen, command, description, closeModal, handleSaveCommand]);

  return (
    <ReactModal
      closeTimeoutMS={100}
      contentLabel={"Add Command Modal"}
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
      <Title>Add New Command</Title>
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
            label={"Clear"}
            buttonType={"warning"}
            clickHandler={onClearClicked}
          />
          <ActionButton
            label={"Save"}
            buttonType={"primary"}
            clickHandler={onSaveClicked}
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
