import React from 'react';
import NavBar from './Components/NavBar';
import BreadCrumbs from './Components/BreadCrumbs';
import Hero from './Components/Hero';
import OverAll from './Components/OverAll';
import Perfromance from './Components/Perfromance';
import Sentiment from './Components/Sentiment';
import About from './Components/About';
import Tokenomics from './Components/Tokenomics';

const App = () => {
	return (
		<>
			<NavBar />
			<div className='max-w-[1200px] m-auto'>
				<BreadCrumbs />
				<Hero />
				<OverAll />
				<Perfromance />
				<Sentiment />
				<About />
				<Tokenomics />
			</div>
		</>
	);
};

export default App;
