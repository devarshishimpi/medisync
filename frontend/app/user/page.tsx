"use client";

import styles from "../page.module.css";
import { useAuth } from "@pangeacyber/react-auth";
import pageWithAuthentication from "../../components/pageWithAuthentication";

const User = () => {
  const { user } = useAuth();

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h2>Hello {user?.profile?.first_name}!</h2>
        <p>This is a private page, only authenticated users can view this</p>
      </div>
    </main>
  );
};

export default pageWithAuthentication(User);
