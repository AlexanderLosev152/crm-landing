import styles from './style.module.scss';

export const ReviewsItem = ({ id, img, name, company, text }) => {
	return (
		<li key={id} className={styles.reviewsitem}>
			<div className={styles.wrapper}>
				<img className={styles.img} src={img} alt={name} />
				<div className={styles.box}>
					<h3 className={styles.name}>{name}</h3>
					<p className={styles.company}>{company}</p>
				</div>
			</div>
			<p className={styles.text}>{text}</p>
		</li>
	);
};
