import { Layout } from "../../components/Layout/Layout";
import styles from "./DocumentsPage.module.scss";


export const DocumentsPage = () => {

	return (
		<Layout>
			<h1 className={styles.title}>юридическая информация</h1>

			<section className={styles.section}>
				<h2 className={styles.subtitle}>Политика конфиденциальности</h2>
				<p className={styles.text}></p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.subtitle}>Обработка персональных данных</h2>
				<p className={styles.text}></p>
			</section>

		</Layout>
	);
};
