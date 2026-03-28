import styles from './style.module.scss';

export const Imgbox = ({ bg }) => {
	return (
		<div className={styles.imgbox}>
			<img src={bg} alt='img' />
		</div>
	);
};
