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

      <section className={styles.heading_form}>
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

      <section className={styles.portfolio} id="portfolio">
        <h4 className={styles.portfolio_suptitle}>портфолио</h4>
        <h3 className={styles.portfolio_title}>Наши кейсы</h3>
        <div className={styles.portfolio_container}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section className={styles.reviews}>
        <div className={styles.reviews_container}>
          <h4 className={styles.reviews_suptitle}>портфолио</h4>
          <h3 className={styles.reviews_title}>Наши кейсы</h3>
        </div>
        <div className={styles.reviews_slider}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section className={styles.price} id="price">
        <h4 className={styles.price_suptitle}>тарифы</h4>
        <h3 className={styles.price_title}>Наши кейсы</h3>
        <div className={styles.price_container}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section className={styles.heading_form_dark}>
        <h2 className={styles.heading_dark}>
          Мы делаем полный цикл: бренд, упаковка и цифровой запуск
        </h2>
        <CustomButton
          backgroundColor={"var(--green)"}
          color={"var(--primary)"}
          label={"Давайте обсудим Ваш проект"}
          onClick={() => setIsFormOpen(true)}
        />
        {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}
      </section>

      <section className={styles.team} id="team">
        <div className={styles.team_container}>
          <h4 className={styles.team_suptitle}>о нас</h4>
          <h3 className={styles.team_title}>Команда</h3>
        </div>
        <h4 className={styles.team_text}>
          «Работаем на результат, опираемся <br /> на экспертизу и современные
          решения»
        </h4>
        <div className={styles.team_container}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section className={styles.contacts} id="contacts">
        <div className={styles.contacts_container}>
          <h4 className={styles.contacts_suptitle}>контакты</h4>
          <h3 className={styles.contacts_title}>Мы на связи</h3>
        </div>
        <div className={styles.team_container}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </Layout>
  );
};
