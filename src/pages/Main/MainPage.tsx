import { useState } from "react";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { Layout } from "../../components/Layout/Layout";
import styles from "./MainPage.module.scss";
import { ServiceCard } from "../../components/ServiceCard/ServiceCard";
import { CaseCard } from "../../components/CaseCard/CaseCard";
import { TariffCard } from "../../components/TariffCard/TariffCard";
import { MemberCard } from "../../components/MemberCard/MemberCard";
import { ReviewsSwiper } from "../../components/ReviewsSwiper/ReviewsSwiper";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import ParticlesBackground from "../../components/Particles/ParticlesBackground";
import { ContactFormMainPage } from "../../components/ContactForm/ContactFormMainPage";
import RunningLine from "../../components/RunningLine/RunningLine";


export const MainPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Layout>
      <div className={styles.background_main}>
        <div className={styles.background_main_particles}>
          <ParticlesBackground />
        </div>
        <h1 className={styles.main_title}>SHIFT</h1>
        <section className={styles.main}>
          <div className={styles.main_title_container}>

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
      </div>

      <h2 className={styles.heading} id="about_us">
        Веб-студия - создаем Digital-решения честно и понятно
      </h2>

      <section className={styles.services} id="services">
        <h4 className={styles.services_subtitle}>Услуги</h4>
        <h3 className={styles.services_title}>Что мы делаем</h3>
        <div className={styles.services_container}>
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

          <ServiceCard
            title="Лендинг"
            description="Одностраничные сайты для промоакций, событий"
            price="от 100 000 ₽"
            duration="от 14 дней"
            iconName="landings"
            includesList={[
              "Уникальный дизайн",
              "Привлекающие CTA",
              "Оптимизация конверсии"
            ]}
          />

          <ServiceCard
            title="Брендинг"
            description="Разработка бренда, айдентики с нуля"
            price="от 100 000 ₽"
            duration="от 14 дней"
            iconName="branding"
            includesList={[
              "Логотип и фирменный стиль",
              "Гайдлайн по использованию",
              "Брендбук"
            ]}
          />

          <ServiceCard
            title="SMM"
            description="Продвижение в социальных сетях"
            price="от 100 000 ₽"
            duration="от 14 дней"
            iconName="smm"
            includesList={[
              "Стратегия продвижения",
              "Создание контента",
              "Аналитика и отчёты"
            ]}
          />

          <ServiceCard
            title="Интернет-магазины"
            description="Сайты для продаж товаров и услуг"
            price="от 100 000 ₽"
            duration="от 14 дней"
            iconName="online-store"
            includesList={[
              "Каталог товаров",
              "Удобная корзина",
              "Интеграция с платежами"
            ]}
          />

          <ServiceCard
            title="Видео"
            description="Создание видео-роликов"
            price="от 100 000 ₽"
            duration="от 14 дней"
            iconName="video"
            includesList={[
              "Сценарий и съемка",
              "Монтаж и эффекты",
              "Финальный экспорт"
            ]}
          />

          <ServiceCard
            title="Полиграфия"
            description="Печать, разработка макетов"
            price="от 100 000 ₽"
            duration="от 14 дней"
            iconName="printing"
            includesList={[
              "Дизайн макетов",
              "Подготовка к печати",
              "Контроль качества"
            ]}
          />

          <ServiceCard
            title="SEO-оптимизация"
            description="Повышение видимости в поисковых системах"
            price="от 100 000 ₽"
            duration="от 14 дней"
            iconName="seo"
            includesList={[
              "Анализ сайта",
              "Оптимизация контента",
              "Построение ссылок"
            ]}
          />

          <ServiceCard
            title="Аудит безопасности"
            description="Пентест, комплаенс, юридическое сопровождение"
            price="от 100 000 ₽"
            duration="от 14 дней"
            iconName="security-audit"
            includesList={[
              "Проверка уязвимостей",
              "Отчёты и рекомендации",
              "Юридическая поддержка"
            ]}
          />

        </div>
      </section>

      <section className={styles.heading_form}>
        <h2 className={styles.heading}>
          Мы делаем современные сайты, доступые каждому
        </h2>
        <CustomButton
          backgroundColor={"var(--green)"}
          color={"var(--primary)"}
          label={"Рассказать нам о своем новом проекте"}
          onClick={() => setIsFormOpen(true)}
        />
        {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}
      </section>

      <section className={styles.portfolio} id="portfolio">
        <h4 className={styles.portfolio_subtitle}>портфолио</h4>
        <h3 className={styles.portfolio_title}>Наши кейсы</h3>
        <div className={styles.portfolio_container}>
          <CaseCard
            title="Название проекта"
            description="Описание проекта"
            tag="Брендинг"
            imageUrl="/jpg/cases/case-2.jpg"
          />
          <CaseCard
            title="Название проекта"
            description="Описание проекта"
            tag="Брендинг"
            imageUrl="/jpg/cases/case-2.jpg"
          />
          <CaseCard
            title="Название проекта"
            description="Описание проекта"
            tag="Брендинг"
            imageUrl="/jpg/cases/case-2.jpg"
          />
          <CaseCard
            title="Название проекта"
            description="Описание проекта"
            tag="Брендинг"
            imageUrl="/jpg/cases/case-2.jpg"
          />
          <CaseCard
            title="Название проекта"
            description="Описание проекта"
            tag="Брендинг"
            imageUrl="/jpg/cases/case-2.jpg"
          />
        </div>
      </section>

      <section className={styles.reviews}>
        <div className={styles.reviews_container}>
          <div className={styles.reviews_main}>
            <div className={styles.reviews_text}>
              <h4 className={styles.reviews_subtitle}>отзывы</h4>
              <h3 className={styles.reviews_title}>Что о нас говорят</h3>
              <div className={styles.reviews_buttons}>
                <button className="review-slider-nav review-slider-prev">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="currentColor" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.71885 20.7707C9.5784 20.63 9.49951 20.4394 9.49951 20.2407C9.49951 20.0419 9.5784 19.8513 9.71885 19.7107L16.7059 12.7107C16.775 12.639 16.8577 12.5818 16.9492 12.5425C17.0407 12.5031 17.1391 12.4824 17.2387 12.4815C17.3383 12.4806 17.437 12.4995 17.5292 12.5372C17.6214 12.5748 17.7052 12.6305 17.7756 12.7009C17.8461 12.7712 17.9018 12.855 17.9396 12.9471C17.9773 13.0393 17.9964 13.138 17.9955 13.2376C17.9947 13.3372 17.9741 13.4356 17.9348 13.5271C17.8955 13.6187 17.8385 13.7014 17.7669 13.7707L12.0589 19.4897L28.2489 19.4787C28.4478 19.4784 28.6386 19.5572 28.7795 19.6976C28.9203 19.8381 28.9996 20.0287 28.9999 20.2277C29.0001 20.4266 28.9214 20.6174 28.7809 20.7583C28.6404 20.8991 28.4498 20.9784 28.2509 20.9787L12.0569 20.9887L17.7679 26.7107C17.8395 26.7799 17.8965 26.8627 17.9358 26.9542C17.9751 27.0457 17.9957 27.1441 17.9965 27.2437C17.9974 27.3433 17.9783 27.4421 17.9406 27.5342C17.9028 27.6264 17.8471 27.7101 17.7766 27.7805C17.7062 27.8508 17.6224 27.9065 17.5302 27.9442C17.438 27.9818 17.3393 28.0008 17.2397 27.9998C17.1401 27.9989 17.0417 27.9782 16.9502 27.9388C16.8587 27.8995 16.776 27.8423 16.7069 27.7707L9.71885 20.7707Z" fill="currentColor" />
                  </svg>
                </button>
                <button className="review-slider-nav review-slider-next">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="currentColor" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.0986 19.7482C29.2293 19.879 29.3026 20.0563 29.3026 20.2412C29.3026 20.4261 29.2293 20.6034 29.0986 20.7342L22.5991 27.2458C22.5347 27.3125 22.4578 27.3657 22.3727 27.4023C22.2876 27.4389 22.196 27.4582 22.1034 27.459C22.0108 27.4599 21.9189 27.4423 21.8331 27.4072C21.7474 27.3722 21.6695 27.3204 21.6039 27.255C21.5384 27.1895 21.4865 27.1116 21.4514 27.0259C21.4163 26.9402 21.3986 26.8483 21.3994 26.7557C21.4001 26.663 21.4193 26.5715 21.4559 26.4863C21.4924 26.4012 21.5455 26.3242 21.6121 26.2598L26.9219 20.9398L11.8614 20.95C11.6764 20.9503 11.4988 20.877 11.3678 20.7463C11.2368 20.6157 11.163 20.4383 11.1628 20.2533C11.1625 20.0682 11.2358 19.8907 11.3665 19.7597C11.4971 19.6287 11.6745 19.5549 11.8595 19.5547L26.9237 19.5454L21.6112 14.2226C21.5446 14.1582 21.4914 14.0812 21.4549 13.9961C21.4184 13.9109 21.3992 13.8194 21.3984 13.7267C21.3977 13.6341 21.4154 13.5422 21.4505 13.4565C21.4856 13.3708 21.5375 13.2929 21.603 13.2274C21.6685 13.162 21.7464 13.1102 21.8322 13.0751C21.918 13.0401 22.0098 13.0225 22.1025 13.0233C22.1951 13.0242 22.2867 13.0435 22.3718 13.0801C22.4569 13.1167 22.5338 13.1699 22.5981 13.2365L29.0986 19.7482Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles.reviews_slider}>
              <ReviewsSwiper />
            </div>
          </div>
          <RunningLine
            items={[
              <img src="/png/logo.png" alt="logo1" />,
              <img src="/png/logo.png" alt="logo2" />,
              <img src="/png/logo.png" alt="logo3" />,
              <img src="/png/logo.png" alt="logo4" />,
              <img src="/png/logo.png" alt="logo5" />,
            ]}
          />
        </div>
      </section>

      <section className={styles.price} id="price">
        <h4 className={styles.price_subtitle}>тарифы</h4>
        <h3 className={styles.price_title}>Пакеты услуг</h3>
        <div className={styles.price_container}>
          <TariffCard
            title="Старт"
            subtitle="Подходит для быстрого запуска бизнеса"
            iconName="start"
            features={[
              { text: 'Описание, что входит в тариф', included: true },
              { text: 'Описание, что входит в тариф', included: true },
              { text: 'Описание, что входит в тариф', included: true },
              { text: 'Описание, что входит в тариф', included: true },
              { text: 'Описание, что входит в тариф', included: false },
              { text: 'Описание, что входит в тариф', included: false },
            ]}
          />
          <TariffCard
            title="Стандарт"
            subtitle="Подходит для быстрого запуска бизнеса"
            iconName="standart"
            features={[
              { text: 'Описание, что входит в тариф', included: true },
              { text: 'Описание, что входит в тариф', included: true },
              { text: 'Описание, что входит в тариф', included: true },
              { text: 'Описание, что входит в тариф', included: true },
              { text: 'Описание, что входит в тариф', included: false },
              { text: 'Описание, что входит в тариф', included: false },
            ]}
          />
          <TariffCard
            title="Премиум"
            subtitle="Подходит для быстрого запуска бизнеса"
            iconName="premium"
            features={[
              { text: 'Описание, что входит в тариф', included: true },
              { text: 'Описание, что входит в тариф', included: true },
              { text: 'Описание, что входит в тариф', included: true },
              { text: 'Описание, что входит в тариф', included: true },
              { text: 'Описание, что входит в тариф', included: false },
              { text: 'Описание, что входит в тариф', included: false },
            ]}
          />

        </div>
      </section>

      <section className={styles.heading_form_dark}>
        <h2 className={styles.heading_dark}>
          Мы делаем полный цикл: бренд, упаковка и цифровой запуск
        </h2>
        <CustomButton
          backgroundColor={"var(--green)"}
          color={"var(--primary)"}
          label={"Обсудить проект"}
          onClick={() => setIsFormOpen(true)}
        />
        {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}
      </section>

      <section className={styles.team} id="team">
        <div className={styles.team_header}>
          <h4 className={styles.team_subtitle}>о нас</h4>
          <h3 className={styles.team_title}>Команда</h3>
        </div>
        <h4 className={styles.team_text}>
          «Работаем на результат, опираемся <br /> на экспертизу и современные
          решения»
        </h4>
        <div className={styles.team_members}>
          <MemberCard
            name="Иван Иванов"
            role="Директор"
            imageName="member"
          />
          <MemberCard
            name="Иван Иванов"
            role="Директор"
            imageName="member"
          />
          <MemberCard
            name="Иван Иванов"
            role="Директор"
            imageName="member"
          />
          <MemberCard
            name="Иван Иванов"
            role="Директор"
            imageName="member"
          />
          <MemberCard
            name="Иван Иванов"
            role="Директор"
            imageName="member"
          />
          <MemberCard
            name="Иван Иванов"
            role="Директор"
            imageName="member"
          />
        </div>
      </section>

      <section className={styles.contacts} id="contacts">
        <div className={styles.contacts_container}>
          <h4 className={styles.contacts_subtitle}>контакты</h4>
          <h3 className={styles.contacts_title}>Мы на связи</h3>
        </div>

        <div className={styles.contacts_content}>
          <div className={styles.contacts_content_form}>
            <h4 className={styles.contacts_content_form_title}>
              Обсудить проект
            </h4>
            <p className={styles.contacts_content_form_text}>
              Напишите нам и мы свяжемся с Вами, чтобы обсудить проект
            </p>
            <ContactFormMainPage onClose={() => setIsFormOpen(false)} />
          </div>

          <div className={styles.contacts_content_socials}>
            <h4 className={styles.contacts_content_socials_title}>
              Социальные сети
            </h4>
            <div className={styles.contacts_content_socials_links}>
              <a href="#contacts">
                <img src="/svg/icon_tg.svg" alt="telegram" />
              </a>
              <a href="#contacts">
                <img src="/svg/icon_vk.svg" alt="vk" />
              </a>
            </div>
            <h4 className={styles.contacts_content_socials_title}>Написать</h4>
            <div className={styles.contacts_content_socials_links_text}>
              <a href="#contacts">В Телеграм</a>
              <a href="#contacts">По E-mail</a>
            </div>
          </div>

          <div className={styles.contacts_content_address}>
            <h4 className={styles.contacts_content_address_title}>Адрес</h4>
            <p className={styles.contacts_content_address_text}>
              г. Санк-Петербург,
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
