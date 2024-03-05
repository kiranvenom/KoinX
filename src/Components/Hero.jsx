import CryptoDetails from './CryptoDetails';
import TrendingTopCoin from './TrendingTopCoin';
import StartFree from './StartFree';

const Hero = () => {
	return (
		<div className='parent h-[80vh]'>
			<div className='div1 h-full pr-4'>
				<CryptoDetails />
			</div>
			<div className='div2 pl-4 mb-2'>
				<StartFree />
			</div>
			<div className='div3 pl-4 mt-2'>
				<TrendingTopCoin />
			</div>
		</div>
	);
};

export default Hero;
