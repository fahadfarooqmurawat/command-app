import { CommandsView } from "./views/commands-view/commands.view";
import { LoginView } from "./views/login-view/login.view";

const isLoggedIn = false;

export const App = () => {
  if (!isLoggedIn) return <LoginView />;

  return <CommandsView />;
};
