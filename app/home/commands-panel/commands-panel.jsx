"use client";

import { useMemo, useState } from "react";

import styled from "styled-components";
import { Toast } from "@/app/components/toast";
import { TextBox } from "@/app/components/text-box";
import { appStore } from "@/app/stores/app.store";
import { CommandsList } from "./commands-list/commands-list";

export default function CommandsPanel({ allCommands }) {
  const [searchText, setSearchText] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const addButtonClicked = () => {
    appStore.setState({ addModal: true });
  };

  const copyToClipboard = (e, command) => {
    navigator.clipboard.writeText(command);
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
    setShowToast(true);
  };

  const filteredCommands = useMemo(() => {
    if (!allCommands) return [];

    if (searchText.trim() === "") return allCommands;

    const searchWords = searchText.trim().split(" ");

    return allCommands.filter((command) =>
      searchWords.every(
        (word) =>
          command.command.includes(word) || command.description.includes(word)
      )
    );
  }, [searchText, allCommands]);

  return (
    <Section>
      {showToast && (
        <Toast
          message='Copied!'
          position={position}
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}
      <Header>
        <TextBox
          placeholder='Search'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <AddButton onClick={addButtonClicked}>Add Command</AddButton>
      </Header>
      <CommandsList
        commands={filteredCommands}
        onElementClicked={copyToClipboard}
      />
    </Section>
  );
}

const Section = styled.section`
  background-color: var(--primary-background);
  width: 90%;
  height: 90%;
  padding: 20px;
  max-width: 1000px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AddButton = styled.button`
  background-color: var(--primary-foreground);
  color: var(--primary-text);
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  margin-right: 20px;

  &:hover {
    transform: scale(1.1);
  }

  transition: transform 0.1s;
`;
