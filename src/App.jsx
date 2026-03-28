import { Header } from './components/layout/Header/Header';

import { Hero } from './components/layout/Hero/Hero';
import { SectionTitle } from './components/ui/SectionTitle/SectionTitle';

import './App.scss';

export const App = () => {
	return (
		<div className={'container'}>
			<Header />
			<Hero />
			<SectionTitle />
		</div>
	);
};
