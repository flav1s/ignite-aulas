/* eslint-disable @next/next/no-img-element */
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={styles.active} href="">
            Home
          </a>
          <a href="">Post</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
};
