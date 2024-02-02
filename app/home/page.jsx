import { revalidatePath } from "next/cache.js";
import { makeApiRouteCallFromServer } from "../lib/make-api-route-call-from-server.js";
import { CommandsPanel } from "./commands-panel/commands-panel";
import { AddModal } from "./modals/add-modal";
import { EditModal } from "./modals/edit-modal";
import { DeleteModal } from "./modals/delete-modal";
import styles from "./home.module.css";

const API_BASE_URL = process.env.API_BASE_URL;

const revalidate = async () => {
  "use server";
  revalidatePath(`${API_BASE_URL}/api/commands`);
};

export default async function Home() {
  const commands = await makeApiRouteCallFromServer();

  return (
    <main className={styles.main}>
      <CommandsPanel allCommands={commands} />
      <AddModal revalidate={revalidate} />
      <EditModal revalidate={revalidate} />
      <DeleteModal revalidate={revalidate} />
    </main>
  );
}
