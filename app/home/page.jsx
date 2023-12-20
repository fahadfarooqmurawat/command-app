import { getAllCommands } from "../lib/actions/get-all-commands";

import { EditModal } from "./modals/edit-modal";
import { CommandsPanel } from "./commands-panel/commands-panel";
import { AddModal } from "./modals/add-modal";
import { DeleteModal } from "./modals/delete-modal";
import styles from "./home.module.css";

export default async function Home() {
  const commands = await getAllCommands();

  return (
    <main className={styles.main}>
      <CommandsPanel allCommands={commands} />
      <AddModal />
      <EditModal />
      <DeleteModal />
    </main>
  );
}
