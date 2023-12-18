"use client";

import { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { appStore } from "@/app/stores/app.store";
import { ActionButton } from "@/app/components/action-button";
import { saveCommand } from "@/app/lib/actions/save-command";

export const AddModal = () => {
  const isOpen = appStore((state) => state.addModal);
  const closeModal = appStore.getState().hideAddModal;

  const [command, setCommand] = useState("");
  const [description, setDescription] = useState("");

  const commandTextBoxRef = useRef<HTMLInputElement>(null);

  const clearCommand = () => {
    setCommand("");
    setDescription("");
    commandTextBoxRef.current?.focus();
  };

  const onCancelClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    closeModal();
  };
  const onClearClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    clearCommand();
  };
  const onSaveClicked = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await saveCommand({ command, description });
      closeModal();
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
    const enterHandler = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Enter") {
        e.preventDefault();
        saveCommand({ command, description });
      }
    };

    document.addEventListener("keydown", enterHandler);

    return () => document.removeEventListener("keydown", enterHandler);
  }, [isOpen]);

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
        <Input
          type='text'
          value={command}
          onChange={(e) => setCommand(e.currentTarget.value)}
          ref={commandTextBoxRef}
        />
        <Input
          type='text'
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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input``;

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
