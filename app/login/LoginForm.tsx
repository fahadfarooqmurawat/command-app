"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import styles from "./login.module.css";

export default function LoginForm() {
  const router = useRouter();

  const primaryButtonClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const response = await signIn("facebook");

    console.log(response);

    // if (!response?.error) {
    //   router.push("/home");
    //   router.refresh();
    // } else {
    //   setEmailError(true);
    //   setPasswordError(true);
    // }
  };

  return (
    <form className={styles.form}>
      <button
        className={styles.primaryButton}
        type='submit'
        onClick={primaryButtonClick}
      >
        Login with Gmail
      </button>
    </form>
  );
}
