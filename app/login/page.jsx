import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import { authOptions } from "../api/auth/[...nextauth]/options.js";

import LoginForm from "./LoginForm";
import styles from "./login.module.css";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.h2}>Sign in to your account</h2>
        <LoginForm />
      </div>
    </main>
  );
}
