import { Title } from '../../ui/Title/Title';
import styles from './style.module.scss';

import BG from '../../../../public/images/employee.jpg';
import { Imgbox } from '../../ui/Imgbox/Imgbox';

export const Employee = () => {
	return (
		<section className={styles.employee}>
			<div className={'container'}>
				<Title
					title={'Сотрудник уходит,данные остаются'}
					description={
						'Вся информация о клиенте и его заказах сохраняется в CRM'
					}
				/>

				<Imgbox bg={BG} />
			</div>
		</section>
	);
};
