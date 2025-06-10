import React from 'react';
import { useState } from 'react';
import styles from './Cookies.module.scss';
import { CustomButton } from '../CustomButton/CustomButton';

interface CookiesProps {
	onClose: () => void;
}

const Cookies: React.FC<CookiesProps> = ({ onClose }) => {
	const [isAccepted, setIsAccepted] = useState(false);

	const handleAccept = () => {
		setIsAccepted(true);
		onClose()
		// Add logic to set cookie acceptance here
	};

	/* const handleDecline = () => {
		onClose();
		// Add logic to decline cookie acceptance here
	}; */


	if (isAccepted) return null;
	return (
		<div className={styles.cookies_container}>
			<div className={styles.cookies_content}>
				<h2 className={styles.cookies_title}>Мы используем cookies</h2>
				<p className={styles.cookies_text}>
					Продолжая использовать сайт, вы даёте согласие на использование файлов cookie и обработку персональных данных
				</p>
				<div className={styles.cookies_button}>
					<CustomButton
						backgroundColor={"var(--green)"}
						color={"var(--primary)"}
						label={"Понятно"}
						onClick={() => handleAccept()}
					>
					</CustomButton>
				</div>

			</div>
		</div>
	);
};

export default Cookies;