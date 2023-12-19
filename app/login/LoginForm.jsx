"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import styles from "./login.module.css";

export default function LoginForm() {
  const router = useRouter();

  const primaryButtonClick = async (e) => {
    e.preventDefault();

    await signIn("facebook");

    // console.log("RES{PONSE");
    // console.log(response);

    // if (!response?.error) {
    //   router.push("/home");
    //   router.refresh();
    // }
  };

  return (
    <form className={styles.form}>
      <button
        className={styles.primaryButton}
        type='submit'
        onClick={primaryButtonClick}
      >
        Login with Facebook
      </button>
    </form>
  );
}
