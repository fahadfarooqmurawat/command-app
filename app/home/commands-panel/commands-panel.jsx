"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { Toast } from "@/app/components/toast";
import { TextBox } from "@/app/components/text-box";
import { appStore } from "@/app/stores/app.store";
import { FancyButton } from "@/app/components/fancy-buton.jsx";

import { CommandsList } from "./commands-list/commands-list";

export const CommandsPanel = ({ allCommands }) => {
  const [searchText, setSearchText] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const searchBoxRef = useRef(null);

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

  useEffect(() => {
    searchBoxRef?.current?.focus?.();
  }, []);

  return (
    <Section>
      {showToast && (
        <Toast
          message='Copied!'
          position={position}
          duration={2000}
          onClose={() => setShowToast(false)}
        />
      )}
      <Header>
        <TextBox
          placeholder='Search'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          ref={searchBoxRef}
        />
        <FancyButton onClick={addButtonClicked}>Add Command</FancyButton>
      </Header>
      <CommandsList
        commands={filteredCommands}
        onElementClicked={copyToClipboard}
      />
    </Section>
  );
};

const Section = styled.section`
  height: calc(100% - 120px);
  width: 90%;
  max-width: 1000px;
  padding: 20px;
  padding-top: 40px;

  background-color: var(--primary-background);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
