import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_content_logo}>
          <Link to="/">
            <img src="/png/logo.png" alt="logo" />
          </Link>
        </div>

        <div className={styles.footer_content_nav}>
          <a href="#about_us" className={styles.footer_content_nav_link}>
            О студии
          </a>
          <a href="#services" className={styles.footer_content_nav_link}>
            Услуги
          </a>
          <a href="#portfolio" className={styles.footer_content_nav_link}>
            Портфолио
          </a>
          <a href="#price" className={styles.footer_content_nav_link}>
            Тарифы
          </a>
          <a href="#team" className={styles.footer_content_nav_link}>
            Команда
          </a>
          <a href="#contacts" className={styles.footer_content_nav_link}>
            Контакты
          </a>
        </div>

        <div className={styles.footer_content_socials_links}>
          <a
            href="#contacts"
            className={styles.footer_content_socials_links_link}
          >
            <img src="/svg/icon_tg.svg" alt="telegram" width={32} height={32} />
          </a>
          <a
            href="#contacts"
            className={styles.footer_content_socials_links_link}
          >
            <img src="/svg/icon_vk.svg" alt="vk" width={32} height={32} />
          </a>
        </div>
      </div>

      <div className={styles.footer_line}>
        <p className={styles.footer_line_left}>
          © SHIFT Creative, 2025. Все права защищены.
        </p>
        <div className={styles.footer_line_right}>
          <p className={styles.footer_line_right_license}>
            Интерактивные частицы: <a href="https://particles.js.org" target="_blank">https://particles.js.org/</a>
          </p>
          <Link to="/documents" className={styles.footer_line_right_link}>
            Юридическая информация
          </Link>
        </div>
      </div>
    </footer>
  );
};
