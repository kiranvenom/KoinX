import axios from 'axios';
import { useEffect, useState } from 'react';
import apiLinks from '../Utils/links';
import TradingViewWidget from './TradingViewWidget';
import { AiOutlineLoading } from 'react-icons/ai';

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
		return (
			<div className='h-[80vh] flex justify-center items-center flex-col'>
				<AiOutlineLoading className='rot' color='blue' size={200} />
				<h1 className='mt-6'>Loading.. please Wait</h1>
			</div>
		);
	}

	const bitcoinPrice = data?.bitcoin?.usd ?? null;
	const bitcoinPriceInr = data?.bitcoin?.inr ?? null;
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
