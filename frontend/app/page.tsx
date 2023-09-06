"use client";

import { useAuth } from "@pangeacyber/react-auth";
import styles from "./page.module.css";

const Home = () => {
  const { authenticated } = useAuth();

  return (
    <main className={styles.main}>
      <div>
        {!authenticated && (
          <div className={styles.card}>
            <h2>
              Welcome to your brand new NextJS app integrated with{" "}
              <a href="https://pangea.cloud/">Pangea</a>
            </h2>
            <p>You are viewing unauthenticated public page content</p>
          </div>
        )}
        {authenticated && (
          <div className={styles.card}>
            <h2>
              You have been successfully authenticated by{" "}
              <a href="https://pangea.cloud/">Pangea AuthN Service</a>
            </h2>
            <p>Now You are viewing authenticated page content</p>
          </div>
        )}

        <div className={styles.card}>
          You can read more about <a href="https://pangea.cloud/">Pangea</a>{" "}
          AuthN service
          <a href="https://pangea.cloud/docs/authn"> here</a>
        </div>
      </div>
    </main>
  );
}

export default Home;