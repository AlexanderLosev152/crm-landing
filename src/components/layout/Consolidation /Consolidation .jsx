import { Crm } from '../../ui/Crm/Crm';
import { Title } from '../../ui/Title/Title';
import styles from './style.module.scss';

export const Consolidation = () => {
	return (
		<section className={styles.consolidation}>
			<div className={'container'}>
				<Title
					title='Объединение всех каналов связи в одной системе'
					description='Подключите мессенджеры, соцсети, Авито, сайты, чаты, и общайтесь с клиентами в режиме одного окна.'
				/>
				<Crm />
			</div>
		</section>
	);
};
