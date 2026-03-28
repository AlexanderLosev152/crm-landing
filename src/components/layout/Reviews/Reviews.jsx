import { Title } from '../../ui/Title/Title';
import styles from './style.module.scss';

export const Reviews = () => {
	return (
		<section className={styles.reviews}>
			<div className='container'>
				<Title
					title={'Отзывы'}
					description={
						'Более 15 000 000 компаний по всему миру уже используют CRM-системы.'
					}
				/>
			</div>
		</section>
	);
};
