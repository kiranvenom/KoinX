import React from 'react';
import NavBar from './Components/NavBar';
import BreadCrumbs from './Components/BreadCrumbs';
import Hero from './Components/Hero';

const App = () => {
	return (
		<>
			<NavBar />
			<div className='max-w-[1200px] m-auto'>
				<BreadCrumbs />
				<Hero />
			</div>
		</>
	);
};

export default App;
