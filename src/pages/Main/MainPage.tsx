import { Layout } from "../../components/Layout/Layout";
import styles from "./MainPage.module.scss";
import { ServiceCard } from "../../components/ServiceCard/ServiceCard";
import { CaseCard } from "../../components/CaseCard/CaseCard";

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
        <p className={styles.main_subtext}>Мы создаем сайты и бренды под ключ</p>
      </section>


      <ServiceCard
        title="Сайты"
        description="Многостраничные сайты, корпоративные сайты"
        price="от 100 000 ₽"
        duration="от 14 дней"
        iconName="sites"
        includesList={[
          "Дизайн десктопной версии",
          "Адаптивы под планшет, мобильные телефоны",
          "Верстка"
        ]}
      />

      <CaseCard
        title="Название проекта"
        description="Описание проекта"
        tag="Брендинг"
        imageUrl="/public/jpg/cases/case-2.jpg"
      />
    </Layout>
  );
};
