import { getAllCommands } from "../lib/get-all-commands";
import CommandsPanel from "./commands-panel";
import styles from "./home.module.css";

export default async function Home() {
  const commands = await getAllCommands();

  // const editCommand = (command: Command) => {
  //   console.log("OPEN MODAL");
  //   console.log(command);
  //   setCommandToEdit(command);
  //   setIsEditModalOpen(true);
  // };

  // const deleteCommand = (command: Command) => {
  //   setCommandToDelete(command);
  //   setIsDeleteModalOpen(true);
  // };

  // const saveCommand = async (newCommand: NewCommand) => {
  //   const result = await apiService.addCommand({ userId, newCommand });

  //   setIsAddModalOpen(false);
  //   setAllCommands(result);
  // };

  // const updateCommand = async (updatedCommand: Command) => {
  //   console.log("TEST");
  //   console.log(updatedCommand);
  //   const result = await apiService.updateCommand({ userId, updatedCommand });

  //   setIsEditModalOpen(false);
  //   setAllCommands(result);
  // };

  // const deleteCommandConfirm = async (commandId: number) => {
  //   const result = await apiService.deleteCommand({ userId, commandId });

  //   setIsDeleteModalOpen(false);
  //   setAllCommands(result);
  // };

  // useEffect(() => {
  //   const ctrlFOverride = (e: KeyboardEvent) => {
  //     if (e.ctrlKey && e.key === "f" && searchBoxRef.current !== null) {
  //       e.preventDefault();
  //       searchBoxRef.current.focus();
  //     }
  //   };

  //   document.addEventListener("keydown", ctrlFOverride);

  //   return () => document.removeEventListener("keydown", ctrlFOverride);
  // }, []);

  return (
    <main className={styles.container}>
      <CommandsPanel allCommands={commands} />
    </main>
  );
}
