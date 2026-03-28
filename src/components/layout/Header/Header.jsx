import { Logo } from '../../ui/Logo/Logo';
import { Nav } from '../../ui/Nav/Nav';
import styles from './style.module.scss';

import classNames from 'classnames';

export const Header = () => {
	return (
		<header className={classNames(styles.header, 'container')}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<Nav />
		</header>
	);
};
