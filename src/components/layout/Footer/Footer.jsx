import classNames from 'classnames';

import styles from './style.module.scss';
import { Title } from '../../ui/Title/Title';
import { Form } from '../../ui/Form/Form';

export const Footer = () => {
	return (
		<footer className={classNames(styles.footer, 'container')}>
			<Title
				title={'Заказать настройку CRM'}
				description={'Оставьте заявку,и мы перезвоним Вам в течение 10 минут.'}
			/>
			<Form />

			<p className={styles.copyrigth}>
				© 2015-2024 ООО “ИТ-Комфорт” ИНН: 5906133680 ОГРН: 1155958105962
			</p>
		</footer>
	);
};
