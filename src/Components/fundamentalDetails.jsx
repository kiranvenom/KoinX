import React from 'react';

const fundamentalDetails = ({ heading = 'empty', val = 12 }) => {
	return (
		<>
			<div className='flex justify-between border-b my-4'>
				<h2 className='text-slate-400'>{heading}</h2>
				<h2 className='mb-2'>{val}</h2>
			</div>
		</>
	);
};

export default fundamentalDetails;
