import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderBar.module.scss";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { ContactForm } from "../ContactForm/ContactForm";
import { CustomButton } from "../CustomButton/CustomButton";

export const HeaderBar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BurgerMenu>
          <a href="#about_us" className={styles.menu_link}>
            О студии
          </a>
          <a href="#services" className={styles.menu_link}>
            Услуги
          </a>
          <a href="#portfolio" className={styles.menu_link}>
            Портфолио
          </a>
          <a href="#price" className={styles.menu_link}>
            Тарифы
          </a>
          <a href="#team" className={styles.menu_link}>
            Команда
          </a>
          <a href="#contacts" className={styles.menu_link}>
            Контакты
          </a>
          <div className={styles.socials}>
            <p className={styles.socials_title}>E-mail:</p>
            <div className={styles.socials_links}>
              <a href="#contacts" className={styles.menu_link}>
                <img
                  src="/svg/icon_tg.svg"
                  alt="telegram"
                  width={50}
                  height={50}
                />
              </a>
              <a href="#contacts" className={styles.menu_link}>
                <img src="/svg/icon_vk.svg" alt="vk" width={50} height={50} />
              </a>
            </div>
          </div>
        </BurgerMenu>
        <Link to="/">
          <img src="/png/logo.png" alt="logo" />
        </Link>
        <CustomButton
          backgroundColor={"var(--white)"}
          color={"var(--primary)"}
          label={"Оставить заявку"}
          onClick={() => setIsFormOpen(true)}
        />
      </header>

      {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}
    </div>
  );
};
