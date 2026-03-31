import styles from './style.module.scss';

import classNames from 'classnames';

import BG from '../../../../public/images/hero-bg.png';
import { Form } from '../../ui/Form/Form';

export const Hero = () => {
	return (
		<section className={classNames(styles.hero, 'container')}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.textBlock}>
						<h1 className={styles.title}>
							Поможем <span>навести порядок</span> в компании
						</h1>
						<p className={styles.subtitle}>
							Внедрение CRM за 2 недели. Работаем по всей России.
						</p>

						<Form />
					</div>

					<div className={styles.imageBlock}>
						<img src={BG} alt='CRM внедрение' className={styles.image} />
					</div>
				</div>
			</div>
		</section>
	);
};
