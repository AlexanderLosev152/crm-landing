import styles from './style.module.scss';

import LOGO from '/public/icons/logo-icon.png';

export const Logo = () => {
	return (
		<a className={styles.logo}>
			<img src={LOGO} alt='ИТ-КОМФОРТ' />
			<span>ИТ-КОМФОРТ</span>
		</a>
	);
};
