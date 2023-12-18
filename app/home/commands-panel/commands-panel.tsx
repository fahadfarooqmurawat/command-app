"use client";

import { useMemo, useState } from "react";

import styled from "styled-components";
import { Command } from "../../@types/command.type";
import { Toast } from "@/app/components/toast";
import { TextBox } from "@/app/components/text-box";
import { CommandsList } from "./commands-list/commands-list";
import { appStore } from "@/app/stores/app.store";

export default function CommandsPanel({
  allCommands,
}: {
  allCommands: Command[];
}) {
  const [searchText, setSearchText] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const addButtonClicked = () => {
    appStore.setState({ addModal: true });
  };

  const copyToClipboard = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    command: string
  ) => {
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
  background-color: #f0f4f8;
  width: 90%;
  height: 90%;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AddButton = styled.button``;
