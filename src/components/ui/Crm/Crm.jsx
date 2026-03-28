import { useState, useEffect, useRef } from 'react';
import { crmData } from '/data/crmdata';
import CRM from '/icons/CRM.png';

import styles from './style.module.scss';

export const Crm = () => {
	const radius = 200;
	const total = crmData.length;
	const [isVisible, setIsVisible] = useState(false);
	const crmRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.3 }
		);

		if (crmRef.current) {
			observer.observe(crmRef.current);
		}

		return () => {
			if (crmRef.current) {
				observer.unobserve(crmRef.current);
			}
		};
	}, []);

	return (
		<div
			className={`${styles.crm} ${isVisible ? styles.animate : ''}`}
			ref={crmRef}
		>
			<svg className={styles.lines} viewBox='0 0 600 600'>
				{crmData.map(({ id }, index) => {
					const angle = (index / total) * 360;
					const radian = (angle * Math.PI) / 180;
					const x = Math.cos(radian) * radius;
					const y = Math.sin(radian) * radius;

					return (
						<line
							key={`line-${id}`}
							className={styles.line}
							x1='300'
							y1='300'
							x2={300 + x}
							y2={300 + y}
							stroke='#ccc'
							strokeWidth='2'
							strokeDasharray='2,6'
							style={{
								'--delay': `${index * 0.1}s`
							}}
						/>
					);
				})}
			</svg>
			<img className={styles.img} src={CRM} alt='CRM' />
			<div className={styles.box}>
				{crmData.map(({ id, src }, index) => {
					const angle = (index / total) * 360;
					const radian = (angle * Math.PI) / 180;
					const x = Math.cos(radian) * radius;
					const y = Math.sin(radian) * radius;

					return (
						<div
							key={id}
							className={styles.icon}
							style={{
								'--x': `${x}px`,
								'--y': `${y}px`,
								'--rotation': `${angle}deg`,
								'--delay': `${index * 0.1}s`
							}}
						>
							<img src={src} alt={`Integration ${id}`} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
