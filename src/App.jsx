import { Header } from './components/layout/Header/Header';

import { Hero } from './components/layout/Hero/Hero';
import { SectionTitle } from './components/ui/SectionTitle/SectionTitle';

import { Consolidation } from './components/layout/Consolidation /Consolidation ';
import { Employee } from './components/layout/Employee/Employee';
import { Make } from './components/layout/Make/Make';
import { Reviews } from './components/layout/Reviews/Reviews';

import './App.scss';
import { Questions } from './components/layout/uestions/Questions';
import { Footer } from './components/layout/Footer/Footer';

export const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<SectionTitle />
			<Consolidation />
			<Employee />
			<Make />
			<Reviews />
			<Questions />
			<Footer />
		</>
	);
};
