import styles from './style.module.scss';

export const SectionTitle = () => {
	return (
		<h2 className={styles.title}>
			Внедрение CRM позволит Вашей компании
			<span>связываться </span> с клиентом вовремя , <span>сохранять</span> всю
			информацию о заказах , <span>анализировать</span>показатели продаж.
		</h2>
	);
};
