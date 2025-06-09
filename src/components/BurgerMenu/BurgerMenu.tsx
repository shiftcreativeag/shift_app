import React, { useState } from "react";
import styles from "./BurgerMenu.module.scss";

interface BurgerMenuProps {
  children?: React.ReactNode; // Дочерние элементы (пункты меню)
  isScrolled?: boolean
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ children, isScrolled }) => {
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
        {children}
      </nav>
    </div>
  );
};

