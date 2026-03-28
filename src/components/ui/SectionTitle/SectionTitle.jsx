import styles from './style.module.scss';

import classNames from 'classnames';

export const SectionTitle = () => {
	return (
		<section className={classNames(styles.wrappertitle, 'container')}>
			<h2 className={styles.title}>
				Внедрение CRM позволит Вашей компании
				<span>связываться </span> с клиентом вовремя , <span>сохранять</span>{' '}
				всю информацию о заказах , <span>анализировать</span>показатели продаж.
			</h2>
		</section>
	);
};
