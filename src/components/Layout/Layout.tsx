import type { PropsWithChildren } from "react";
import { HeaderBar } from "../HeaderBar/HeaderBar";
import styles from "./Layout.module.scss";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <HeaderBar />
      <div>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  );
};
