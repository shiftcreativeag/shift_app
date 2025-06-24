import React from 'react';
import styles from './ReviewCard.module.scss';

interface ReviewCardProps {
	name: string;
	company: string;
	review: string;
	avatarUrl: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ name, company, review, avatarUrl }) => {

	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<div className={styles.info}>
					<h3 className={styles.name}>{name}</h3>
					<p className={styles.company}>{company}</p>
				</div>
				<div className={styles.avatar_wrap}>
					<img className={styles.avatar} src={`${avatarUrl}`} alt={`${name} avatar`} />
				</div>
			</div>
			<p className={styles.review}>{review}</p>
		</div>
	);
};
