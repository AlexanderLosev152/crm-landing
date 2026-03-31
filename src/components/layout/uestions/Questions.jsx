import classNames from 'classnames';

import { Title } from '../../ui/Title/Title';

import styles from './style.module.scss';
import { Accordion } from '../../ui/Accordion/Accordion';

export const Questions = () => {
	return (
		<section className={styles.questions}>
			<div className={classNames(styles.wrapper, 'container')}>
				<Title title={'Частые вопросы'} />

				<Accordion />
			</div>
		</section>
	);
};


