import { Title } from '../../ui/Title/Title';
import styles from './style.module.scss';

import BG from '../../../../public/images/make-bg.jpg';
import { Imgbox } from '../../ui/Imgbox/Imgbox';

export const Make = () => {
	return (
		<section className={styles.make}>
			<div className='container'>
				<Title
					title={'Принимайте решения на основе данных'}
					description={'Отчёты по продажам, по менеджерам, по клиентам.'}
				/>
				<Imgbox bg={BG} />
			</div>
		</section>
	);
};
