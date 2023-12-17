import LoginForm from "./LoginForm";
import styles from "./login.module.css";

export default async function Login() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.h2}>Sign in to your account</h2>
        <LoginForm />
      </div>
    </main>
  );
}
