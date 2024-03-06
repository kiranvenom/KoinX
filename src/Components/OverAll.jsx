import React from 'react';

const OverAll = () => {
	return (
		<ul className='flex justify-between lg:w-[70%] border-b-2 mb-2 pb-4 pt-4 whitespace-nowrap gap-6 overflow-x-scroll overview w-full pl-4 lg:pl-0'>
			<li className='text-blue-500 border-b-2 pb-2 font-bold border-blue-500'>
				OverView
			</li>
			<li>Fundamentals</li>
			<li>New Insites</li>
			<li>Sentiments</li>
			<li>Team</li>
			<li>Techincal</li>
			<li>Tokenomics</li>
		</ul>
	);
};

export default OverAll;
