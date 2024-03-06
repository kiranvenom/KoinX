import React from 'react';
import SentimentCard from './SentimentCard';

const Sentiment = () => {
	return (
		<div className='lg:w-[70%] bg-white p-4 rounded-lg mb-4'>
			<h1 className='font-bold text-3xl mb-2'>Sentiment</h1>
			<div className='flex overflow-x-scroll sentiment gap-4'>
				<SentimentCard color='bg-green-200' />
				<SentimentCard color='bg-blue-200' />
			</div>
			<h1 className='font-bold text-3xl my-4'>Analysis Estimates</h1>
			<div className='flex gap-14 items-center'>
				<div className='bg-green-200 w-[8rem] h-[8rem] rounded-full flex justify-center items-center'>
					<h2 className='text-2xl font-bold'>76%</h2>
				</div>
				<div>
					<div className='flex gap-4 items-center'>
						<h1>Buy</h1>
						<div className='w-[20vw] h-[8px] bg-green-500 rounded-lg'></div>
						<h1>78%</h1>
					</div>
					<div className='flex gap-4 items-center'>
						<h1>Hold</h1>
						<div className='w-[4vw] h-[8px] bg-slate-500 rounded-lg'></div>
						<h1>8%</h1>
					</div>
					<div className='flex gap-4 items-center'>
						<h1>Sell</h1>
						<div className='w-[8vw] h-[8px] bg-red-500 rounded-lg'></div>
						<h1>16%</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sentiment;
