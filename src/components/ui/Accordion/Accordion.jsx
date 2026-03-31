import { useState } from 'react';
import { accordiondata } from '../../../../data/accordiondata';

import { AccordionItem } from '../AccordionItem/AccordionItem';
import { AccordionItems } from '../AccordionItems/AccordionItems';

import styles from './style.module.scss';

export const Accordion = () => {
	const [openId, setOpenId] = useState(null);

	const toggleAccordion = (id) => {
		setOpenId(openId === id ? null : id);
	};

	return (
		<AccordionItems className={styles.accordion}>
			{accordiondata.map(({ id, title, descr }) => (
				<AccordionItem
					key={id}
					id={id}
					title={title}
					descr={descr}
					isOpen={openId === id}
					onToggle={toggleAccordion}
				/>
			))}
		</AccordionItems>
	);
};
