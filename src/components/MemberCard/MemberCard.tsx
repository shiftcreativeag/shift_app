import React from 'react';
import styles from './MemberCard.module.scss';

interface MemberCardProps {
	name: string;
	role: string;
	imageName: string;
}

export const MemberCard: React.FC<MemberCardProps> = ({ name, role, imageName }) => {
	return (
		<div className={styles.memberCard}>
			<div className={styles.imageWrapper}>
				<img src={imageName} alt={name} className={styles.image} />
			</div>
			<h3 className={styles.name}>{name}</h3>
			<p className={styles.role}>{role}</p>
		</div>
	);
};
