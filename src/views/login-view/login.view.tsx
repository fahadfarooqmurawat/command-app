import { LoginViewDesktop } from "./ui/login.view.desktop";

export const LoginView = () => {
  const loginWithGmail = () => {
    throw new Error("Function not implemented.");
  };

  const loginWithFacebook = () => {
    throw new Error("Function not implemented.");
  };

  return (
    <LoginViewDesktop
      loginWithGmail={loginWithGmail}
      loginWithFacebook={loginWithFacebook}
    />
  );
};
