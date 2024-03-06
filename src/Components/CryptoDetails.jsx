import axios from 'axios';
import { useEffect, useState } from 'react';
import apiLinks from '../Utils/links';
import TradingViewWidget from './TradingViewWidget';

const CryptoDetails = () => {
	const [data, setdata] = useState(null);

	const getCryptoData = async () => {
		try {
			const { data } = await axios.get(apiLinks.simplePrice);
			setdata(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getCryptoData();
	}, []);

	if (data === null) {
		return <p>Loading...</p>;
	}

	const bitcoinPrice = data.bitcoin && data.bitcoin.usd;
	const bitcoinPriceInr = data.bitcoin && data.bitcoin.inr;
	const formated = bitcoinPrice.toLocaleString('en-IN');
	const formatedinr = bitcoinPriceInr.toLocaleString('en-IN');
	return (
		<div className='w-[100%] h-[100vh] bg-white p-4 rounded-lg'>
			<h1 className='text-xl font-bold capitalize mb-4'>
				{Object.keys(data)}
			</h1>

			{bitcoinPrice && (
				<h2 className='text-2xl font-bold'>${formated}</h2>
			)}
			{bitcoinPriceInr && (
				<h2 className='font-bold mb-6'>${formatedinr}</h2>
			)}
			<div className='w-full h-[80%]'>
				<TradingViewWidget />
			</div>
		</div>
	);
};

export default CryptoDetails;
