import { Logo } from '../../ui/Logo/Logo';
import { Nav } from '../../ui/Nav/Nav';
import styles from './style.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<Nav />
		</header>
	);
};
