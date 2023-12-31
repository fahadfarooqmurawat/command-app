
import { makeApiRouteCall } from "../lib/make-api-route-call.js";
import { CommandsPanel } from "./commands-panel/commands-panel";
import { AddModal } from "./modals/add-modal";
import { EditModal } from "./modals/edit-modal";
import { DeleteModal } from "./modals/delete-modal";
import styles from "./home.module.css";

export default async function Home() {
  const commands = await makeApiRouteCall();

  return (
    <main className={styles.main}>
      <CommandsPanel allCommands={commands} />
      <AddModal />
      <EditModal />
      <DeleteModal />
    </main>
  );
}
