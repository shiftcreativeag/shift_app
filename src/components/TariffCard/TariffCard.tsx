import React, { useEffect } from 'react';
import { useState } from "react";
import styles from './TariffCard.module.scss';
import { CustomButton } from "../CustomButton/CustomButton";
import { ContactForm } from "../ContactForm/ContactForm";

interface Feature {
	text: string;
	included: boolean;
}

interface TariffCardProps {
	title: string;
	subtitle: string;
	iconName: string;
	features: Feature[];
	active?: boolean
}

export const TariffCard: React.FC<TariffCardProps> = ({
	active,
	title,
	subtitle,
	iconName,
	features
}) => {

	const [isFormOpen, setIsFormOpen] = useState(false);

	const [width, setWidth] = useState(window.innerWidth); const handleResize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
    <div className={styles.tariffCard}>
      <div className={styles.header}>
        <div className={styles.header_top}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.icon}>
            <img src={`/svg/tariffs/${iconName}.svg`} alt={title} />
          </div>
        </div>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <ul className={styles.features}>
        {features.map(({ text, included }, idx) => (
          <li
            key={idx}
            className={`${styles.feature} ${
              included ? styles.included : styles.excluded
            }`}
          >
            {included ? (
              <img src={`/svg/check.svg`} alt="button checkbox open" />
            ) : (
              <img src={`/svg/cross.svg`} alt="button checkbox close" />
            )}{" "}
            <span>{text}</span>
          </li>
        ))}
      </ul>
      <div className={styles.button}>
        <CustomButton
          theme={active ? "primary" : "secondary"}
          size={width > 1024 ? "l" : width > 768 ? "m" : "s"}
          label={"Оставить заявку"}
          onClick={() => setIsFormOpen(true)}
        />
      </div>
      {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}
    </div>
  );
};
