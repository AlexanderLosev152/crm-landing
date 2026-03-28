import { useState } from 'react';
import styles from './style.module.scss';

import classNames from 'classnames';

import BG from '../../../../public/images/hero-bg.png';

export const Hero = () => {
	const [formData, setFormData] = useState({
		companyName: '',
		phone: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		// Здесь можно добавить логику отправки данных на сервер или другую обработку
	};

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

						<form className={styles.form} onSubmit={handleSubmit}>
							<input
								type='text'
								name='companyName'
								placeholder='Название компании'
								value={formData.companyName}
								onChange={handleChange}
								className={styles.input}
							/>
							<input
								type='tel'
								name='phone'
								placeholder='Телефон*'
								value={formData.phone}
								onChange={handleChange}
								className={styles.input}
								required
							/>
							<button type='submit' className={styles.button}>
								ЗАКАЗАТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
							</button>
						</form>

						<p className={styles.disclaimer}>
							Мы никогда не передаем Ваши данные третьим лицам
						</p>
					</div>

					<div className={styles.imageBlock}>
						.
						<img src={BG} alt='CRM внедрение' className={styles.image} />
					</div>
				</div>
			</div>
		</section>
	);
};
