import { useState } from 'react';

import styles from './style.module.scss';

export const Form = () => {
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
				placeholder='Телефон *'
				value={formData.phone}
				onChange={handleChange}
				className={styles.input}
				required
			/>
			<button type='submit' className={styles.button}>
				ЗАКАЗАТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
			</button>
			<p className={styles.disclaimer}>
				Мы никогда не передаем Ваши данные третьим лицам
			</p>
		</form>
	);
};
