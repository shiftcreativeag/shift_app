import React, { useState } from "react";
import styles from "./BurgerMenu.module.scss";

interface BurgerMenuProps {
  children?: React.ReactNode; // Дочерние элементы (пункты меню)
  isScrolled?: boolean
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.menu_container}>
      <button
        className={`${styles.burger_menu} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
        aria-label="Меню"
        aria-expanded={isOpen}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>

      {/* Выпадающее меню */}
      <nav className={`${styles.menu} ${isOpen ? styles.menu_open : ""} ${isScrolled ? styles.scrolled : ''}`}>
        <a href="#about_us" className={styles.menu_link} onClick={() => setIsOpen(false)}>
          О студии
        </a>
        <a href="#services" className={styles.menu_link} onClick={() => setIsOpen(false)}>
          Услуги
        </a>
        <a href="#portfolio" className={styles.menu_link} onClick={() => setIsOpen(false)}>
          Портфолио
        </a>
        <a href="#price" className={styles.menu_link} onClick={() => setIsOpen(false)}>
          Тарифы
        </a>
        <a href="#team" className={styles.menu_link} onClick={() => setIsOpen(false)}>
          Команда
        </a>
        <a href="#contacts" className={styles.menu_link} onClick={() => setIsOpen(false)}>
          Контакты
        </a>
        <div className={styles.socials}>
          <p className={styles.socials_title}>E-mail:</p>
          <div className={styles.socials_links}>
            <a href="#contacts" className={styles.menu_link} onClick={() => setIsOpen(false)}>
              <img
                src="/svg/icon_tg.svg"
                alt="telegram"
                width={50}
                height={50}
              />
            </a>
            <a href="#contacts" className={styles.menu_link} onClick={() => setIsOpen(false)}>
              <img src="/svg/icon_vk.svg" alt="vk" width={50} height={50} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

