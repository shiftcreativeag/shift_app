import { useState } from "react";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { Layout } from "../../components/Layout/Layout";
import styles from "./MainPage.module.scss";
import { ContactForm } from "../../components/ContactForm/ContactForm";

export const MainPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <Layout>
      <section className={styles.main}>
        <img
          className={styles.main_background}
          src="/jpg/background.jpg"
          alt="background"
        />
        <div className={styles.main_title_container}>
          <h1 className={styles.main_title}>SHIFT</h1>
          <p className={styles.main_text}>creavtive</p>
        </div>
        <p className={styles.main_subtext}>
          Мы создаем сайты и бренды под ключ
        </p>
        <ul className={styles.main_list}>
          <li className={styles.main_list_item}>Гарантия результата</li>
          <li className={styles.main_list_item}>Индивидуальный подход</li>
          <li className={styles.main_list_item}>Юридическая чистота</li>
          <li className={styles.main_list_item}>Полный цикл</li>
        </ul>
      </section>

      <h2 className={styles.heading} id="about_us">
        Веб-студия - создаем Digital-решения честно и понятно, создаем
        Digital-решения честно и понятно, создаем Digital-решения честно и
        понятно
      </h2>

      <section className={styles.services} id="services">
        <h4 className={styles.services_suptitle}>Услуги</h4>
        <h3 className={styles.services_title}>Что мы делаем</h3>
        <div className={styles.services_container}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section>
        <h2 className={styles.heading}>
          Мы делаем современные сайты, доступые каждому
        </h2>
        <CustomButton
          backgroundColor={"var(--green)"}
          color={"var(--primary)"}
          label={"Расскажите нам о своем новом проекте"}
          onClick={() => setIsFormOpen(true)}
        />
        {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}
      </section>
    </Layout>
  );
};
