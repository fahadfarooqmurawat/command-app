"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Command } from "../@types/command.type";

export default function CommandsPanel({
  allCommands,
}: {
  allCommands: Command[];
}) {
  const [searchText, setSearchText] = useState("");

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

  return <></>;
}
