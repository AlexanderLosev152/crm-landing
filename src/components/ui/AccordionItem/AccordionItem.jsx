import classNames from 'classnames';
import styles from './style.module.scss';

export const AccordionItem = ({ id, title, descr, isOpen, onToggle }) => {
	return (
		<li className={classNames(styles.accordionItem, isOpen && styles.open)}>
			<button className={styles.accordionButton} onClick={() => onToggle(id)}>
				<span className={styles.accordionTitle}>{title}</span>
				<span
					className={classNames(styles.accordionIcon, isOpen && styles.open)}
				></span>
			</button>
			<div
				className={classNames(styles.accordionContent, isOpen && styles.open)}
			>
				<div>
					<p>{descr}</p>
				</div>
			</div>
		</li>
	);
};
