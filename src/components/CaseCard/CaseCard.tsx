import React from 'react';
import styles from './CaseCard.module.scss';

interface CaseCardProps {
	title: string;
	description: string;
	tag: string;
	imageUrl: string;
}

export const CaseCard: React.FC<CaseCardProps> = ({
	title,
	description,
	tag,
	imageUrl
}) => {
	return (
		<div className={styles.wrap}>
			<div className={styles.cardContainer}>
				<div className={styles.cardWrapper}>
					<span className={styles.tag}>{tag}</span>
					<div className={styles.imageContainer}>
						<img src={imageUrl} alt={title} className={styles.image} />
					</div>
					<div className={styles.content}>
						<h3 className={styles.title}>{title}</h3>
						<p className={styles.description}>{description}</p>
					</div>
				</div>
			</div>
			<div className={styles.cardContainer}>
				<div className={styles.cardWrapper}>
					<span className={styles.tag}>{tag}</span>
					<div className={styles.imageContainer}>
						<img src={imageUrl} alt={title} className={styles.image} />
					</div>
					<div className={styles.content}>
						<h3 className={styles.title}>{title}</h3>
						<p className={styles.description}>{description}</p>
					</div>
				</div>
			</div>
			<div className={styles.cardContainer}>
				<div className={styles.cardWrapper}>
					<span className={styles.tag}>{tag}</span>
					<div className={styles.imageContainer}>
						<img src={imageUrl} alt={title} className={styles.image} />
					</div>
					<div className={styles.content}>
						<h3 className={styles.title}>{title}</h3>
						<p className={styles.description}>{description}</p>
					</div>
				</div>
			</div>
			<div className={styles.cardContainer}>
				<div className={styles.cardWrapper}>
					<span className={styles.tag}>{tag}</span>
					<div className={styles.imageContainer}>
						<img src={imageUrl} alt={title} className={styles.image} />
					</div>
					<div className={styles.content}>
						<h3 className={styles.title}>{title}</h3>
						<p className={styles.description}>{description}</p>
					</div>
				</div>
			</div>
			<div className={styles.cardContainer}>
				<div className={styles.cardWrapper}>
					<span className={styles.tag}>{tag}</span>
					<div className={styles.imageContainer}>
						<img src={imageUrl} alt={title} className={styles.image} />
					</div>
					<div className={styles.content}>
						<h3 className={styles.title}>{title}</h3>
						<p className={styles.description}>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};