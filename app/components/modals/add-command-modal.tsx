import { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { NewCommand } from "../../@types/new-command.type";
import { ActionButton } from "../../buttons/action-button/action-button";
import { CommandFormElements } from "../../command-form-elements/command-form-elements";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  saveCommand: (command: NewCommand) => void;
};

const emptyNewCommand = {
  command: "",
  description: "",
};

export const AddCommandModal = ({ isOpen, closeModal, saveCommand }: Props) => {
  const [newCommand, setNewCommand] = useState<NewCommand>(emptyNewCommand);

  const commandTextBoxRef = useRef<HTMLInputElement>(null);

  const clearCommand = () => {
    setNewCommand(emptyNewCommand);
    commandTextBoxRef.current?.focus();
  };

  const onAfterClose = () => {
    setNewCommand(emptyNewCommand);
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
        saveCommand(newCommand);
      }
    };

    document.addEventListener("keydown", enterHandler);

    return () => document.removeEventListener("keydown", enterHandler);
  }, [closeModal, isOpen, newCommand]);

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
      <CommandFormElements
        command={newCommand}
        setCommand={setNewCommand}
        ref={commandTextBoxRef}
      />
      {/* <VerticalSpacer space={"20px"} /> */}
      <ActionButtonsContainer>
        <ActionButton
          label={"Cancel"}
          buttonType={"secondary"}
          clickHandler={closeModal}
        />
        <ActionButton
          label={"Clear"}
          buttonType={"warning"}
          clickHandler={clearCommand}
        />
        <ActionButton
          label={"Save"}
          buttonType={"primary"}
          clickHandler={() => saveCommand(newCommand)}
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
