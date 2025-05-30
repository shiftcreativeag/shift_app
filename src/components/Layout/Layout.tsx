import type { PropsWithChildren } from "react";
import { HeaderBar } from "../HeaderBar/HeaderBar";
import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.scss";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <HeaderBar />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};
