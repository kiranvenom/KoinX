import CryptoDetails from './CryptoDetails';
import TrendingTopCoin from './TrendingTopCoin';
import StartFree from './StartFree';

const Hero = () => {
	return (
		<div className='parent'>
			<div className='div1 pr-2'>
				<CryptoDetails />
			</div>
			<div className='div2 pl-2 mb-2'>
				<StartFree />
			</div>
			<div className='div3 pl-2 mt-2'>
				<TrendingTopCoin />
			</div>
		</div>
	);
};

export default Hero;
