import { Header } from './components/layout/Header/Header';

import { Hero } from './components/layout/Hero/Hero';
import { SectionTitle } from './components/ui/SectionTitle/SectionTitle';

import './App.scss';
import { Consolidation } from './components/layout/Consolidation /Consolidation ';
import { Employee } from './components/layout/Employee/Employee';
import { Make } from './components/layout/Make/Make';
import { Reviews } from './components/layout/Reviews/Reviews';

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
		</>
	);
};
