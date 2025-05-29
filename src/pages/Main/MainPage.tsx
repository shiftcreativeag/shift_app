import { Layout } from "../../components/Layout/Layout";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
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
      <section className={styles.heading}></section>
    </Layout>
  );
};
