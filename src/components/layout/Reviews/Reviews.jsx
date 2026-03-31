import { Title } from '../../ui/Title/Title';
import { ReviewsItem } from '../../ui/ReviewsItem/ReviewsItem';

import styles from './style.module.scss';

import { reviewsData } from '../../../../data/reviewsData';

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

				<ul className={styles.reviewslist}>
					{reviewsData.map(({ id, img, name, company, text }) => (
						<ReviewsItem
							key={id}
							id={id}
							img={img}
							name={name}
							company={company}
							text={text}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};
