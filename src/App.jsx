import { Header } from './components/layout/Header/Header';

import './App.scss';
import { Bg } from './components/ui/Bg/Bg';
import { Hero } from './components/layout/Hero/Hero';
import { SectionTitle } from './components/ui/SectionTitle/SectionTitle';

export const App = () => {
	return (
		<div className={'container'}>
			<Header />
			<Hero />
			<SectionTitle />
		</div>
	);
};
