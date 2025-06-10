import type { PropsWithChildren } from "react";
import { HeaderBar } from "../HeaderBar/HeaderBar";
import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.scss";
/* import Cookies from '../Cookies/Cookies';
import { useState } from "react"; */

export const Layout = ({ children }: PropsWithChildren) => {
  /*   const [cookiesAccepted, setCookiesAccepted] = useState(false);
    const handleCookiesClose = () => {
      setCookiesAccepted(true);
    }; */
  return (
    <div className={styles.layout}>
      {/*  {!cookiesAccepted && <Cookies onClose={handleCookiesClose} />} */}
      <HeaderBar />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};
