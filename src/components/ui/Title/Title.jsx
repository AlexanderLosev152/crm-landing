import styles from './style.module.scss';

export const Title = ({ title, description }) => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.description}>{description}</p>
		</div>
	);
};
