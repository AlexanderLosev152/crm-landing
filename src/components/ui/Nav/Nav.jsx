import { navigationData } from '../../../../data/navigationData';
import styles from './style.module.scss';

export const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				{navigationData.map((item) => (
					<li key={item.id} className={styles.navItem}>
						<a href={item.href} className={styles.navLink}>
							<span>{item.title}</span>
							<p>{item.descr}</p>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
