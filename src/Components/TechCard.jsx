import React from 'react';

const TechCard = ({ src, name }) => {
	return (
		<div className='bg-blue-200 p-4 flex flex-col items-center lg:flex-row gap-10 my-2 rounded-lg'>
			<div className='flex flex-col items-center'>
				<img
					className='w-[8rem] h-[8rem] rounded-lg object-cover'
					src={src}
					alt='user'
				/>
				<h1 className='my-1 font-bold'>{name}</h1>
				<p className='text-xs'>Designation here</p>
			</div>
			<div className='w-[60%]'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
				dicta nihil, officiis dolores eaque placeat totam autem. Est,
				quae dolores odit molestiae voluptas, doloremque consectetur
				eius, velit inventore debitis accusamus.
			</div>
		</div>
	);
};

export default TechCard;
