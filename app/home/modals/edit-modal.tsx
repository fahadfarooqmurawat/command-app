"use client";

import { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { appStore } from "@/app/stores/app.store";
import { ActionButton } from "@/app/components/action-button";
import { saveCommand } from "@/app/lib/actions/save-command";
import { TextBox } from "@/app/components/text-box";

export const EditModal = () => {
  const [isOpen, selectedCommand] = appStore((state) => [
    state.editModal,
    state.selectedCommand,
  ]);
  const closeModal = appStore.getState().hideEditModal;

  const [command, setCommand] = useState("");
  const [description, setDescription] = useState("");

  const commandTextBoxRef = useRef<HTMLInputElement>(null);

  const onCancelClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    closeModal();
  };

  const onUpdateClicked = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      if (selectedCommand) {
        await saveCommand({
          command_id: selectedCommand.command_id,
          command,
          description,
        });
      }
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
    if (isOpen && selectedCommand) {
      setCommand(selectedCommand.command);
      setDescription(selectedCommand.description);
    }
  }, [isOpen, selectedCommand]);
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
  }, [isOpen, command, description]);

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
