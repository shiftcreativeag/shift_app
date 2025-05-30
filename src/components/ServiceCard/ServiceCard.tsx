import React from 'react';
import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
	title: string;
	description: string;
	price: string;
	duration: string;
	iconName: string;
	includesList: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
	title,
	description,
	price,
	duration,
	iconName,
	includesList
}) => {
	return (
		<div className={styles.cardWrapper}>
			<div className={styles.cardInner}>
				<div className={styles.cardFront}>
					<div className={styles.tags}>
						<div className={styles.tag}>{price}</div>
						<div className={styles.tag}>{duration}</div>
					</div>
					<div className={styles.icon}>
						<img src={`/public/svg/services/${iconName}.svg`} alt={title} />
					</div>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.description}>{description}</p>
				</div>
				<div className={styles.cardBack}>
					<ul className={styles.includesList}>
						{includesList.map((item, index) => (
							<li key={index} className={styles.includesItem}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};