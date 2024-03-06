import { FaArrowRight } from 'react-icons/fa6';

const AboutCards = ({ heading = 'Tax', src, bg1, bg2 }) => {
	return (
		<div
			style={{
				background: bg1,
				background: bg2,
			}}
			className='flex gap-6 items-center p-4 rounded-lg my-2'>
			<div className='w-[8rem] h-[8rem] rounded-lg overflow-hidden'>
				<img
					className='w-full h-full object-cover'
					src={src}
					alt='tech'
				/>
			</div>
			<div>
				<h2 className='font-bold text-2xl w-[80%]'>{heading}</h2>
				<button className='bg-white px-6 py-1 rounded-md mt-4 flex items-center gap-4'>
					Check Now <FaArrowRight />
				</button>
			</div>
		</div>
	);
};

export default AboutCards;
