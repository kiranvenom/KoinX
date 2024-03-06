import React from 'react';
import NavBar from './Components/NavBar';
import BreadCrumbs from './Components/BreadCrumbs';
import Hero from './Components/Hero';
import OverAll from './Components/OverAll';
import Perfromance from './Components/Perfromance';

const App = () => {
	return (
		<>
			<NavBar />
			<div className='max-w-[1200px] m-auto'>
				<BreadCrumbs />
				<Hero />
				<OverAll />
				<Perfromance />
			</div>
		</>
	);
};

export default App;
