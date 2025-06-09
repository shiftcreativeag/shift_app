import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./HeaderBar.module.scss";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { ContactForm } from "../ContactForm/ContactForm";
import { CustomButton } from "../CustomButton/CustomButton";

export const HeaderBar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${!isHome ? styles.separated : ""}`}>
        <div className={styles.header_inner_container}>
          <BurgerMenu isScrolled={isScrolled}>
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
            backgroundColor={"transparent"}
            color={"var(--primary)"}
            border="2px solid var(--primary)"
            label={"Оставить заявку"}
            icon={width < 768 && <img src='../../public/svg/email.svg' alt="" />}
            onClick={() => setIsFormOpen(true)}
          />
        </div>
      </header>

      {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}
    </>
  );
};