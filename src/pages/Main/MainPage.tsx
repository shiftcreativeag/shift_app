import { useState } from "react";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { Layout } from "../../components/Layout/Layout";
import styles from "./MainPage.module.scss";
import { ServiceCard } from "../../components/ServiceCard/ServiceCard";
import { CaseCard } from "../../components/CaseCard/CaseCard";
import { TariffCard } from "../../components/TariffCard/TariffCard";
import { MemberCard } from "../../components/MemberCard/MemberCard";
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
        <section className={styles.main}>
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
      </div>

      <h2 className={styles.heading} id="about_us">
        Веб-студия - создаем Digital-решения честно и понятно, создаем
        Digital-решения честно и понятно, создаем Digital-решения честно и
        понятно
      </h2>

      <section className={styles.services} id="services">
        <h4 className={styles.services_suptitle}>Услуги</h4>
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
          label={"Расскажите нам о своем новом проекте"}
          onClick={() => setIsFormOpen(true)}
        />
        {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}
      </section>

      <section className={styles.portfolio} id="portfolio">
        <h4 className={styles.portfolio_suptitle}>портфолио</h4>
        <h3 className={styles.portfolio_title}>Наши кейсы</h3>
        <div className={styles.portfolio_container}>
          <CaseCard
            title="Название проекта"
            description="Описание проекта"
            tag="Брендинг"
            imageUrl="/public/jpg/cases/case-2.jpg"
          />
          <CaseCard
            title="Название проекта"
            description="Описание проекта"
            tag="Брендинг"
            imageUrl="/public/jpg/cases/case-2.jpg"
          />
          <CaseCard
            title="Название проекта"
            description="Описание проекта"
            tag="Брендинг"
            imageUrl="/public/jpg/cases/case-2.jpg"
          />
          <CaseCard
            title="Название проекта"
            description="Описание проекта"
            tag="Брендинг"
            imageUrl="/public/jpg/cases/case-2.jpg"
          />
          <CaseCard
            title="Название проекта"
            description="Описание проекта"
            tag="Брендинг"
            imageUrl="/public/jpg/cases/case-2.jpg"
          />
        </div>
      </section>

      <section className={styles.reviews}>
        <div className={styles.reviews_container}>
          <div>
            <div>
              <h4 className={styles.reviews_suptitle}>отзывы</h4>
              <h3 className={styles.reviews_title}>Что о нас говорят</h3>
            </div>
            <div className={styles.reviews_slider}>
              <div></div>
              <div></div>
              <div></div>
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
        <h4 className={styles.price_suptitle}>тарифы</h4>
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
          <h4 className={styles.contacts_suptitle}>контакты</h4>
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
