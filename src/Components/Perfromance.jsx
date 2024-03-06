import { useEffect, useState } from 'react';
import Fundamentals from './Fundamentals';
import axios from 'axios';
import apiLinks from '../Utils/links';

const Perfromance = () => {
	const [coin, setcoin] = useState('');

	const getCoin = async () => {
		try {
			let response = await axios.get(apiLinks.cryptoName);
			setcoin(response);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getCoin();
	}, []);

	return (
		<div className='lg:w-[70%] border-b-2 mb-4 pb-0 whitespace-nowrap gap-6 overflow-x-scroll overview w-full px-4 py-4  lg:p-6  bg-white rounded-lg'>
			<h1 className='font-bold text-3xl mb-2'>Performance</h1>
			<div className='flex justify-between items-center gap-4 mb-6'>
				<div className='text-xs lg:text-base'>
					<h2>Today's low</h2>
					<p>42,455</p>
				</div>
				<input
					className='w-full'
					type='range'
					name='highLow'
					id='highLow'
				/>
				<div className='text-right text-xs lg:text-base'>
					<h2>Today's high</h2>
					<p>42,455</p>
				</div>
			</div>
			<div className='flex justify-between items-center gap-4'>
				<div className='text-xs lg:text-base'>
					<h2>52w low</h2>
					<p>16,42,455</p>
				</div>
				<input
					className='w-full'
					type='range'
					name='highLow2'
					id='highLow2'
				/>
				<div className='text-right text-xs lg:text-base'>
					<h2>52w high</h2>
					<p>52,42,455</p>
				</div>
			</div>

			<Fundamentals data={coin} />
		</div>
	);
};

export default Perfromance;
